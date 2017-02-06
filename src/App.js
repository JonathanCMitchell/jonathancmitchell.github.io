import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ListView from './ListView'


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
          <div>
            <NavBar />
              </div>
            <div>
            {this.props.children}
          </div>
                </div>
        </MuiThemeProvider>
    );
  }
}

export default App;




