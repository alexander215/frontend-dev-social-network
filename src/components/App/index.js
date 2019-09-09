import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import LandingPage from '../LandingPage';
import ProfilesContainer from '../ProfilesContainer';
import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';

class App extends Component {
  // state ={
  //   user: null,
  //   isLogged: false
  // }

  render(){
    return (
      <div>
        <NavBar />
        <Route exact path={ROUTES.LANDING_PAGE} component={ LandingPage } />
        <Route exact path={ROUTES.PROFILES_CONTAINER} component= { ProfilesContainer } />
      </div>
    );
  }
}

export default App;
