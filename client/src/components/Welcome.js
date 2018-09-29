import React, {Component} from 'react';

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            value: null
        };
    }

    render() {
        return (
            <div>Welcome</div>
        )
    }
}

export default Welcome;