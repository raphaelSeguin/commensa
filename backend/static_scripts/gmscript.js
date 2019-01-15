const {random, sin, PI} = Math;

function initMap() {
    navigator.geolocation.getCurrentPosition( (p) => {

        // ajouter une flèche rouge pour la position de l'utilisateur

        const map = new google.maps.Map(
            document.getElementById('map'), 
            {
                center: {
                    lat: results.user.latitude, 
                    lng: results.user.longitude
                },
                zoom: 13
            }
        );
        
        // ajouter une autre icone pour la position des restaurants

        const markers = results.restaurantsAround.map( resto => {
            new google.maps.Marker({
                position: {
                    lat: resto.latitude,
                    lng: resto.longitude
                },
                map: map,
                label: resto.name,
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
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