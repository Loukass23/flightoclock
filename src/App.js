import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Photos from './components/Photos';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />

      </div>
    );
  }
}

export default App;
