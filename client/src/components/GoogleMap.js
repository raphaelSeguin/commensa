import React, {Component} from 'react';

class GoogleMap extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount () {
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