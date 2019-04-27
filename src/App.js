import React, { Component } from 'react';
import logo2 from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Map from './components/AmChart2';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import Instagram from './components/Instagram';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Navbar />

            <Switch>
              {/* <Route exact path='/' component={Landing} /> */}
              <Route exact path='/map' component={Map} />
              <Route exact path='/ig' component={Instagram} />


            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider >
    );
  }
}

export default App;
