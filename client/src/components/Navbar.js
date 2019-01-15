import React from 'react';
import {Link} from 'react-router-dom';

export default ({user}) => 
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Commensa</li>
                <li><Link to="/welcome">welcome</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/form">form</Link></li>
                <li><Link to="/result">result</Link></li>
                <li><Link to="/randommusic">random music</Link></li>
                <li><Link to="/googlemap">google map</Link></li>
                <li><Link to="/yelp">yelp</Link></li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li className="menu-text">
                    {
                        (user) ? 
                            `Welcome, ${user.name}!`
                            : 
                            <button className="button success">login</button>
                    }
                </li>
            </ul>
        </div>
    </div>