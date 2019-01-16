import React from 'react';
import GoogleMap from './GoogleMap';
import Yelp from './Yelp';
import RandomMusic from './RandomMusic';

export default ({infos}) => {
    return (
        <div id="results-page" className="grid-container">
            <div className="grid-x grid-margin-x">
                <GoogleMap 
                    className="cell medium-4" 
                    infos={infos} />
                <Yelp  
                    className="cell medium-4" 
                    infos={infos} />
                <RandomMusic
                    className="cell medium-4" />
            </div>
        </div>
    )
}