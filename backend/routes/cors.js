const express = require('express');
const path = require('path');
const router = express.Router();
const https = require('https');

router.get('/googlemapscript', function(req, res) {
    let body = '';
    const stream = https.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyCduYEqiDgjqOaA-FMdLcCmmCTyk_z_O8I&callback=initMap', (getRes) => {
        getRes.on('data', (chunk) => {
            body += chunk
        });
        getRes.on('end', () => {
            res.send(body);
        });
    }).on('error', (e) => {
        console.error('error', e);
    });
});

router.get('/gmscript', function(req, res) {
    console.log('send gmscript');
    res.sendFile(path.join(__dirname, '../static_scripts/gmscript.js'));
})

router.get('/yelp', function(req, res) {
    const {latitude, longitude, search} = req.query;
    console.log(latitude, longitude, search);
    let body = '';
    https.get(`https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&search=${search}`,
        {
            headers: {
                'Authorization': 'Bearer jB6a6kmVpSJbWWXLnd4ZbQgeznBZ0cu29jGaf8dnae31ltHslmRNK_3rJI_FxQ9OXNBjphwdvuwQj7CAv__SsrnOR6cI919lzbrT5GZJC-22Jox9CeEBi8EK6QqyW3Yx'
            }
        },
        response => {
            response.on('data', chunk => body += chunk);
            response.on('end', () => {
                jsonResponse = JSON.parse(body);
                filteredResponse = jsonResponse.businesses.map( b => Object.assign({}, {name: b.name},{url: b.url}, b.coordinates));
                res.json(filteredResponse);
            });
    })
});

module.exports = router;
