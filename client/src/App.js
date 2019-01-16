import React, { Component } from 'react';
import {HashRouter, Route, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Result from './components/Result';
import Welcome from './components/Welcome';
import RandomMusic from './components/RandomMusic';
import GoogleMap from './components/GoogleMap';
import Yelp from './components/Yelp';
import About from './components/About';

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
            <HashRouter>
                <div className="App">
                    <div className="grid-container full">
                        <Navbar state={this.state} />
                        <div className="grid-container">
                            <div className="grid-x grid-margin-x">
                                <div className="cell center-x">
                                    <Route 
                                        exact path="/" 
                                        component={() => 
                                        <Redirect to={{pathname: '/welcome'}} /> }
                                    />
                                    <Route path="/welcome" component={Welcome} />
                                    <Route path="/about" component={About} />
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
            </HashRouter>
        );
    }
}

export default App;
