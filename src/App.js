import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';

import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Hero />

          <Landing />

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
