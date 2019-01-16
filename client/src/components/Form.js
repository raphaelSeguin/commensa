import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infosReady: false,
            geolocation: null
        };
        this.submitForm = this.submitForm.bind(this);
        this.infosCallback = props.infosCallback;
    }
    submitForm(e) {
        // get infos from form
        const {name, email, favoriteFood} = this.refs;
        const {latitude, longitude} = this.state.geolocation;
        e.preventDefault();
        const formInfos = {
            latitude, 
            longitude,
            name: name.value,
            email: email.value,
            favoriteFood: favoriteFood.value
        };
        const postRequest = new XMLHttpRequest();
        postRequest.open('POST', '/login');
        postRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        postRequest.onload = () => {
            if (postRequest.status === 200) {
                const infos = JSON.parse(postRequest.responseText)
                console.log(infos);
                // pass infos back to App
                this.infosCallback(infos);
                this.setState({infosReady: true})
            }
        };
        postRequest.send(JSON.stringify(formInfos));
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition( 
            pos => {
                const {latitude, longitude} = pos.coords;
                this.setState({
                    geolocation: { latitude, longitude}
                });
            },
            err => console.log('error in geoloc')
        );
    }

    render() {
        return (
            <div className="cform">
                <form onSubmit={this.submitForm} method="POST">
                    <h3 className="text-center">Tell me who you are...</h3>
                    <label htmlFor="name">Name<small> (only letters and numbers)</small></label>
                    <input ref="name" type="text" name="name" id="name-input" minLength="3" pattern="[\w\s]+" required/>
                    <label htmlFor="email">Email<small> (we shall not spam)</small></label>
                    <input ref="email" type="email" name="email" id="email-input" required/>
                    <h3 className="text-center">...and what you'd like to eat.</h3>
                    <label htmlFor="favorite-food">Favorite food</label>
                    <input ref="favoriteFood" type="text" name="favorite-food" id="favorite-food-input" required/>
                    <h3 className="text-center">Tutto aposto ?</h3>
                    {
                        this.state.infosReady ?
                        <Link to="/result">
                            <button className="button large expanded ning" id="submit-btn">Let's eat then !</button>
                        </Link>
                        :
                        <button className="button large expanded success" id="submit-btn">Si !</button>
                    }
                </form>
            </div>
        )
    }
}

export default Form;