import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import LandingPage from '../LandingPage';

class App extends Component {
  render(){
    return (
      <div>
        <Route exact path='/' component={ LandingPage } />
      </div>
    );
  }
}

export default App;
