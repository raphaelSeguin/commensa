function initMap() {
    navigator.geolocation.getCurrentPosition( (p) => {

        // ajouter une flèche rouge pour la position de l'utilisateur
        const userPos = {
            lat: results.user.latitude, 
            lng: results.user.longitude
        };

        const map = new google.maps.Map(
            document.getElementById('map'), 
            {
                center: userPos,
                zoom: 13,
                label: 'ME:)'
            }
        );
        
        // ajouter une autre icone pour la position des restaurants
        
        const userMarker = new google.maps.Marker({
            position: userPos,
            label: results.user.name,
            map: map
        });

        const markers = results.restaurantsAround.map( resto => {
            new google.maps.Marker({
                position: {
                    lat: resto.latitude,
                    lng: resto.longitude
                },
                map: map,
                label: resto.name,
                icon:'/assets/commensa-logo-marker.png'
                // icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            });
        });
    })
}