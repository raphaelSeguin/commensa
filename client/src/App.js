import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Form from './components/Form';
import Login from './components/Login';
import Result from './components/Result';
import Welcome from './components/Welcome';
import RandomMusic from './components/RandomMusic';
import GoogleMap from './components/GoogleMap';
import Yelp from './components/Yelp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      user: null
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="grid-container full">
            <Route path="/" component={() => 
              <div className="top-bar">
                <div className="top-bar-left">
                  <ul className="menu">
                    <li className="menu-text">Commensa</li>
                    <li><a href="/welcome">welcome</a></li>
                    <li><a href="/login">login</a></li>
                    <li><a href="/form">form</a></li>
                    <li><a href="/result">result</a></li>
                    <li><a href="/randommusic">random music</a></li>
                    <li><a href="/googlemap">google map</a></li>
                    <li><a href="/yelp">yelp</a></li>
                  </ul>
                </div>
                <div className="top-bar-right">
                  <ul className="menu">
                    <li className="menu-text">
                      {this.state.user ? 
                        this.state.user.name : 
                        'please log in'} 
                    </li>
                    <li><button className="button success">login</button></li>
                  </ul>
                </div>
              </div>
            }/>
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell center-x">
                  <Route exact path="/" component={() => 
                      <div>
                        <p>We're born alone, we die alone, let's eat together.</p>
                      </div>
                    } />
                  <Route path="/login" component={Login} />
                  <Route path="/welcome" component={Welcome} />
                  <Route path="/form" component={Form} />
                  <Route path="/result" component={Result} />
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
