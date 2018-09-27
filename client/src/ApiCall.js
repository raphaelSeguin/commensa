import React, {Component} from 'react';

class ApiCall extends Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }
    callApi() {
        const req = new XMLHttpRequest();
        req.open('GET', '/API');
        req.onload = () => {
            this.setState({value: req.responseText});
        }
        req.send();
    }
    componentDidMount() {
        this.callApi();
    }
    render() {
        return (
            <div>API call: {this.state.value || 'waiting...'}</div>
        )
    }
}

export default ApiCall;