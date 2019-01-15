import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Result from './components/Result';
import Welcome from './components/Welcome';
import RandomMusic from './components/RandomMusic';
import GoogleMap from './components/GoogleMap';
import Yelp from './components/Yelp';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.infosCallback = this.infosCallback.bind(this);
    }
    infosCallback(infos) {
        this.setState(infos);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="grid-container full">
                        <Navbar props={this.state} />
                        <div className="grid-container">
                            <div className="grid-x grid-margin-x">
                                <div className="cell center-x">
                                    <Route 
                                        exact path="/" 
                                        component={() => 
                                        <Redirect to={{pathname: '/welcome'}} /> }
                                    />
                                    <Route path="/welcome" component={Welcome} />
                                    <Route path="/form" render={() => <Form infosCallback={this.infosCallback} />} />
                                    <Route path="/result" component={() => <Result infos={this.state} />} />
                                    <Route path="/randommusic" component={RandomMusic} />
                                    <Route path="/googlemap" component={GoogleMap} />
                                    <Route path="/yelp" render={() => <Yelp latitude={49} longitude={2} search={"pizza"}/>} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
