import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Welcome extends Component {
    constructor(props) {
        super();
        this.state = {
            value: null
        };
    }
    goToLogin() {

    }

    render() {
        return (
            <div id="welcome">
                <h3 className="text-center">We're born alone,</h3>
                <h3 className="text-center">We live alone,</h3>
                <h3 className="text-center">We die alone,</h3>
                <h1 className="text-center">Let's eat together!</h1>
                <br/>
                <Link to="/form">
                    <button 
                        className="button large expanded alert"
                        onClick={this.goToLogin}
                    >
                    Oh Yeah!
                    </button>
                </Link>
            </div>
        )
    }
}

export default Welcome;