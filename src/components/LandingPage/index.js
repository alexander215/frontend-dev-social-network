import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import ProfileList from '../ProfileList';
import * as ROUTES from '../../constants/routes';


class LandingPage extends Component {
    render(){
        return(
            <div>
                <h1>Welcome to pbp!</h1>
                <div>
                    Need an account?
                    <a href={ROUTES.REGISTER} >REGISTER HERE</a>
                </div>
                    <br/>
                <div>
                    Want to skip right to the profiles?
                    <a href={ROUTES.PROFILES_CONTAINER}>Head this way...</a>
                </div>
            </div>
            )
        }
    }
    // <Login />
    // <Register /> */
    // <Route exact path='/login' component={ Login } />

export default LandingPage;