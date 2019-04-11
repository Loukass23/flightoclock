import React, { Component } from 'react';
import logo2 from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import logo from './images/First Flightoclock Logo.png'
//import { ReactComponent as Logo } from './images/First Flightoclock Logo.svg';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Hero />
        <div className="App">

          <Landing />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
