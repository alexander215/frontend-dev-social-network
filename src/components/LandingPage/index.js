import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';


class LandingPage extends Component {
    render(){
        return(
            <div>
                <Login />
                <Register />
                {/* <Route exact path='/login' component={ Login } /> */}
            </div>
        )
    }
}

export default LandingPage;