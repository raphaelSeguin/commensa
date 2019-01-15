import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }
    authenticate(provider) {
        console.log(`authenticating with ${provider}`);
        const req = new XMLHttpRequest();
        req.open('GET', `/oauth/${provider}/`);
        req.setRequestHeader('Access-Control-Allow-Origin', '*');
        req.setRequestHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        req.onload = () => console.log('response loaded!');
        req.send();
    }
    render() {
        return (
            <div>
                <h4>Please log in</h4>
                
            </div>
        )
    }
}

export default Login;