import React from 'react';
import GoogleMap from './GoogleMap';
import Yelp from './Yelp';
import RandomMusic from './RandomMusic';

export default ({infos}) => {
    const {user, restaurantsAround} = infos;
    return (
        <div>
            <GoogleMap user={user} restaurantsAround={restaurantsAround}></GoogleMap>
            <Yelp user={user} results={restaurantsAround}></Yelp>
            <RandomMusic></RandomMusic>
        </div>
    )
}