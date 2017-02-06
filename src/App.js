import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListView from './ListView'


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <Navbar/>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ListView />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
        </MuiThemeProvider>
    );
  }
}

export default App;




