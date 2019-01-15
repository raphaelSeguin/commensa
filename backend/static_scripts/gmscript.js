const {random, sin, PI} = Math;

function initMap() {
    navigator.geolocation.getCurrentPosition( (p) => {
        const otherRandomLocations = Array(10).fill(p.coords).map(loc => 
            makeRandomLocationAround(loc.latitude, loc.longitude, 0.01)
        );
        const map = new google.maps.Map(
            document.getElementById('map'), 
            {
                center: {
                    lat: userGMInfos.latitude, 
                    lng: userGMInfos.longitude
                },
                zoom: 13
            }
        );

        const markers = otherRandomLocations.map( loc => {
            new google.maps.Marker({
                position: loc,
                map: map,
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                label: 'gouu'
            });
        });

    })
}

function makeRandomLocationAround(latitude, longitude, maxDistance) {
    const angle = random() * 2 * PI;
    return {
        lat: latitude + maxDistance * random() * sin(angle),
        lng: longitude + maxDistance * random() * sin(angle)
    };
}