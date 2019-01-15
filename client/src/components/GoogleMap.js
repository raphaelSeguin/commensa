import React, {Component} from 'react';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidMount () {

        const variablesInjection = document.createElement("script");
        variablesInjection.textContent = `this.results = ${JSON.stringify(this.props.infos)}`;
        document.body.appendChild(variablesInjection);

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