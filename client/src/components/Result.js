import React from 'react';
import GoogleMap from './GoogleMap';
import Yelp from './Yelp';
import RandomMusic from './RandomMusic';

export default ({infos}) => {
    return (
        <div>
            <GoogleMap infos={infos} ></GoogleMap>
            <Yelp  infos={infos} ></Yelp>
            <RandomMusic></RandomMusic>
        </div>
    )
}