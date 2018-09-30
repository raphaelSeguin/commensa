import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>
                <h4>Please log in</h4>
                <div class="clearfix"></div>
                <a href="#" class="button social facebook">
                    <i class="fa fa-facebook" aria-hidden="true"></i> Facebook 
                </a>
                <a href="#" class="button social linkedin">
                    <i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin 
                </a>
                <a href="#" class="button social google-plus">
                    <i class="fa fa-google-plus" aria-hidden="true"></i> Google + 
                </a>
                <a href="#" class="button social github">
                    <i class="fa fa-github" aria-hidden="true"></i> Github 
                </a>
            </div>
        )
    }
}

export default Login;