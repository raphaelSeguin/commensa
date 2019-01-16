import React from 'react';
import {NavLink} from 'react-router-dom';

export default props => {

    const {user} = props.state;

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">Commensa</li>
                    <li><NavLink to="/welcome">welcome</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    {/* <li><NavLink to="/login">login</NavLink></li>
                    <li><NavLink to="/form">form</NavLink></li>
                    <li><NavLink to="/result">result</NavLink></li>
                    <li><NavLink to="/randommusic">random music</NavLink></li>
                    <li><NavLink to="/googlemap">google map</NavLink></li>
                    <li><NavLink to="/yelp">yelp</NavLink></li> */}
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        {
                            (user) ? 
                                user.returning ?
                                    `Welcome back, ${user.name}!`
                                    :
                                    `Welcome to commensa, ${user.name}!`
                                        : 
                                        null
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
    