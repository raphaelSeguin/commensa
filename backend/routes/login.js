const express = require('express');
const path = require('path');
const router = express.Router();
const https = require('https');
const db = require('mongoose').connexion;
const User = require('../models/user');


const token = process.env.NODE_ENV === 'production' ? 
    process.env.YELP_KEY :
    require('../config.js').api.yelp.key;

const yelpRequest = (latitude, longitude, search) => {
    let body = '';
    return new Promise( (resolve, reject) => {
        https.get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&search=${search}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        },
        response => {
            response.on('data', chunk => body += chunk);
            response.on('end', () => {
                jsonResponse = JSON.parse(body);
                filteredResponse = jsonResponse.businesses.map( b => Object.assign({}, {name: b.name},{url: b.url}, b.coordinates));
                resolve(filteredResponse);
            });
            response.on('error', reject);
        })
    }) 
}


router.post('/', (request, response) => {
    // this object will contain data about restaurants, this user and other users locations and names

    const routeResponse = {
        user: {
            name: undefined,
            returning: false,
            favoriteFood: '',
            asUsual: false
        }
    };

    const {latitude, longitude, favoriteFood, name, email} = request.body;  

    // check if user already in the base (with email only)
    User.findOne({email: request.body.email})
        .exec()
        .then( user => {
            if(user) { // already in the base
                console.log('returning user');
                routeResponse.user.lastConnexion = user.lastConnexion;
                routeResponse.user.asUsual = user.favoriteFood === favoriteFood;
                routeResponse.user.returning = true;
                return user.update( Object.assign(request.body, {lastConnexion: Date.now() }) )
                    .exec()
            } else { // new user
                console.log('new user')
                return User.create(request.body)
                    .then( () => console.log('new user created', ))
                    .catch( err => console.log('could not create new user because:\n', err) )
            }
        })
        .then( () => {
            routeResponse.user.name = name;
            routeResponse.user.favoriteFood = favoriteFood;
            routeResponse.user.latitude = latitude;
            routeResponse.user.longitude = longitude;

        })
        .then( () => yelpRequest(latitude, longitude, favoriteFood)
            .then( restaurants => routeResponse.restaurantsAround = restaurants )
            .catch( err => console.log(err))
        )
        .then( () => response.json(routeResponse) )

});

module.exports = router;