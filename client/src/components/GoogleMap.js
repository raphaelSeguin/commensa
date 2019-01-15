import React, {Component} from 'react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        this.userLatitude = parseFloat(this.props.user.latitude);
        this.userLongitude = parseFloat(this.props.user.longitude);

    }

    // passer les variables à gmScript :
    // insérer un script avant gmScript avec toutes les variables

    componentDidMount () {

        const variables = document.createElement("script");
        variables.textContent = `this.userGMInfos = {
            latitude: ${this.userLatitude},
            longitude: ${this.userLongitude}
        };`;

        document.body.appendChild(variables);

        const scriptInit = document.createElement("script");
        scriptInit.src = "/cors/gmscript/";
        document.body.appendChild(scriptInit);

        const script = document.createElement("script");
        script.src = "/cors/googlemapscript/";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <div id="map" style={{height: '400px', width: '600px'}}></div>
            </div>
        )
    }
}

export default GoogleMap;