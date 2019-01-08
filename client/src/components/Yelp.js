import React from 'react';

export default (props) => {
    const request = new XMLHttpRequest();
    const {latitude, longitude, search} = props;
    request.open('GET', `/cors/yelp?latitude=${latitude}&longitude=${longitude}&search=${search}`);
    request.onload = function() {
        if (request.status === 200) {
            console.log(JSON.parse(request.responseText));
        }
    }
    request.send();
    return (
        <div>YELP</div>
    )
}




