import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import LandingPage from '../LandingPage';
import ProfileList from '../ProfileList';
import * as ROUTES from '../../constants/routes';

class App extends Component {
  render(){
    return (
      <div>
        <Route exact path={ROUTES.LANDING_PAGE} component={ LandingPage } />
        <Route exact path={ROUTES.PROFILE_LIST} component= { ProfileList } />
      </div>
    );
  }
}

export default App;
