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
             <Dropdown>
  <Dropdown.Toggle>Open</Dropdown.Toggle>
  <Dropdown.Menu>
     <Dropdown.MenuItem> A </Dropdown.MenuItem/>
        <Dropdown.MenuItem> B </Dropdown.MenuItem/>
     <Dropdown.MenuItem> C </Dropdown.MenuItem/>
     <Dropdown.MenuItem> D </Dropdown.MenuItem/>
  <Dropdown.Menu/>
</Dropdown>
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
