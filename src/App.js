import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <p>Regulation Type
      <select name="month" required>
       
        <option value="reg">Regulation</option>
        <option value="dreg">Deteiled Regulation</option>
        <option value="opstnd">Operational Standard</option>
        <option value="opmnl">Operational Manual</option>
        <option value="form">form</option>
        </select></br>
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);
