import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Form from './components/Form';
import Login from './components/Login';
import Result from './components/Result';
import Welcome from './components/Welcome';

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
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="menu">
                  <li className="menu-text">Commensa</li>
                  <li><a href="/login">login</a></li>
                  <li><a href="/welcome">welcome</a></li>
                  <li><a href="/api">API call</a></li>
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
            <div className="grid-container">
              <div className="grid-y grid-margin-x">
                <div className="cell">
                  <Route exact path="/" component={() => 
                    <div>
                      <p>Welcome to commensa, please log in.</p>
                      <quote>We're born alone, we die alone, let's eat together.</quote>
                    </div>
                  } />
                </div>
                
                <div className="cell">
                  <Route path="/login" component={Login} />
                  <Route path="/welcome" component={Welcome} />
                  <Route path="/form" component={Form} />
                  <Route path="/result" component={Result} />
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
