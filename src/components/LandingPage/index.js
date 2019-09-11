import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import ProfileList from '../ProfileList';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


class LandingPage extends Component {
    componentDidMount (){
        console.log('landing page mounted')
    }
    componentWillUnmount() {
        console.group('landing page will unmount')
    }
    render(){
        return(
            <div>
                <h1>People Behind the Programs</h1>
                <div>
                    Need an account?
                    <Link to={ROUTES.REGISTER}>REGISTER HEeeeRE</Link>
                </div>
                    <br/>
                <div>
                    Want to skip right to the profiles?
                    <Link class="link" to={ROUTES.PROFILES_CONTAINER}>Head this way...</Link>
                </div>
            </div>
            )
        }
    }
    // <Login />
    // <Register /> */
    // <Route exact path='/login' component={ Login } />

export default LandingPage;