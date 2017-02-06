import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


class App extends Component {
    componentDidMount(){
        injectTapEventPlugin();
    }
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
  };
};

export default App;




