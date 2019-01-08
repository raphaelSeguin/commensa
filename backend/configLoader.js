'use strict';

const configVarNames = [
    'DB_MLAB_PASSWORD',
    'DB_MLAB_USER',
    'DB_MLAB_URL',
    'API_GIPHY_KEY',
    'API_YELP_KEY',
    'API_YELP_ID',
    'OAUTH_GOOGLE_ID',
    'OAUTH_GOOGLE_SECRET',
    'OAUTH_GOOGLE_CALLBACK',
    'OAUTH_FACEBOOK_ID',
    'OAUTH_FACEBOOK_SECRET',
    'OAUTH_FACEBOOK_CALLBACK',
    'OAUTH_TWITTER_ID',
    'OAUTH_TWITTER_SECRET',
    'OAUTH_TWITTER_CALLBACK',
    'OAUTH_LINKEDIN_ID',
    'OAUTH_LINKEDIN_SECRET',
    'OAUTH_LINKEDIN_CALLBACK',
    'OAUTH_GITHUB_ID',
    'OAUTH_GITHUB_SECRET',
    'OAUTH_GITHUB_CALLBACK'
]

const loadFromEnv = (variblesList) => {
    return variblesList.reduce( (obj, varName) => {
        obj[varName] = process.env[varName];
        return obj;
    }, {});
} 
const loadFromObject = (variblesList, object) => {
    return variblesList.reduce( (obj, varName) => {
        const varPath = varName.split('_').join('.').toLowerCase();
        obj[varName] = getPropFromObjectPath(object, varPath);
        return obj;
    } , {});
}
const getPropFromObjectPath = (object, path) => {
    return path.split('.').reduce( (prop, key) => {
        if (prop[key]) {
            return prop[key];
        } else {
            throw(new Error(`getPropFromObjectPath can't find ${key} in ${object}`));
        }
    }, object);
}

let config = {};

if (process.env.NODE_ENV === 'production') {
    config = loadFromEnv(configVarNames);
} else {
    const configObject = require('./config.js');
    config = loadFromObject(configVarNames, configObject);
}

config.spawn = function(scope) {
    for (let k in this) {
        scope[k] = this[k];
    }
}

module.exports = config;


    