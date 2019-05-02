import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Map from './pages/Map';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';
import Instagram from './pages/Instagram';
import Photos from './components/Photos';
import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
              <Route exact path='/photos' component={Photos} />
              <Route exact path='/posts' component={Posts} />
              <Route exact path='/posts/add' component={AddPost} />
              <Route exact path='/signIn' component={SignIn} />


            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider >
    );
  }
}

export default App;
