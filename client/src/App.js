import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiCall from './ApiCall.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="">Commensa</h1>
          <a href="#">About</a>
          <a href="#">Login</a>
        </header>
        <p className="App-intro">
          Welcome, please login.<code>src/App.js</code> and save to reload.
        </p>
        <ApiCall />
      </div>
    );
  }
}

export default App;
