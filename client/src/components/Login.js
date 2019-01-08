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
                <div className="clearfix"></div>
                <a href="/oauth/facebook/">
                    <button className="button social facebook"
                        >
                        <i className="fa fa-facebook" aria-hidden="true"></i> Facebook 
                    </button>
                </a>
                <button className="button social linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin 
                </button>
                <button className="button social google-plus">
                    <i className="fa fa-google-plus" aria-hidden="true"></i> Google + 
                </button>
                <button className="button social github"
                    onClick={() => this.authenticate('github')}>
                    <i className="fa fa-github" aria-hidden="true"></i> Github 
                </button>
            </div>
        )
    }
}

export default Login;