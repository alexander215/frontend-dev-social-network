import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './style.css';
import LandingPage from '../LandingPage';
import ProfilesContainer from '../ProfilesContainer';
import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';
import Register from '../Register';
import Profile from '../Profile';
import CreateProject from '../CreateProject';
import Login from '../Login';
import DeleteList from '../DeleteList';

const My404 = () => {
  return (
    <div>
      <h2>Whoops, that looks like a wrong turn.</h2>
      <a href='/'>Want to head home?</a>
    </div>
  )
}

class App extends Component {
  state ={
    user: '',
    isLogged: false,
    loading: true
  }

  componentDidMount() {
    console.log(this.state, "<--main component did mountttt")
  }
  componentWillUnmount(){
    console.log('comonent did unmount')
  }

  logout = async() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/logout`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(
      this.setState({
        user: '',
        isLogged: false
      })
    )
    .then(
      this.props.history.push('/')
    )
  }


  register = async (data) => {
    console.log(data, "<--data, and hitting register function in index")
    const register = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/register`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
    })
    console.log(register, "<--dataa in register App index")
  const parsedRegister = await register.json();
  console.log(parsedRegister, '<---parsedRegister from Register route')
  this.setState({
    user: parsedRegister.data,
    loading: false,
    isLogged: true
  })
  return parsedRegister

  }

  login = async(data) => { 
  console.log(JSON.stringify(data), "<--this.data in login submit")
        const login = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedLogin = await login.json();
        console.log(parsedLogin.data, "<--parsedLogin from login")
        if (parsedLogin.status.message === "User logged in") {
            console.log('logged in!!!!')
            this.setState({
              user: parsedLogin.data,
              loading: false,
              isLogged: true
            })
        }
        return parsedLogin
      }

     

  render(){
    console.log(this.state.user, "<--this.state in index")
    return (
      <div>
        {/* <NavBar userInfo={this.state.isLogged} /> */}
        <NavBar userInfo={this.state.isLogged} user={this.state.user} logout={this.logout}/>
          
          <Switch>
            <Route exact path={ROUTES.LANDING_PAGE} component={ LandingPage } />
            <Route exact path={ROUTES.LOGIN} render={(props) => <Login {...props} login={this.login} />}/>
            <Route exact path={ROUTES.PROFILES_CONTAINER} render={(props) => <ProfilesContainer  user = { this.state.user} /> }/>
            <Route exact path={ROUTES.PROFILE} render={(props) => <Profile user={this.state} {...props}/>} />
            <Route exact path={ROUTES.REGISTER} render={(props) => <Register  {...props} register={this.register} />} />
            <Route exact path={ROUTES.CREATE_PROJECT} render={(props) => <CreateProject {...props} user={this.state.user} /> } />
            <Route exact path={ROUTES.PROFILES_CONTAINER} render={(props) => <ProfilesContainer  user = { this.state.user} /> }/>
            <Route exact path={ROUTES.DELETE} render={(props) => <DeleteList {...props} delete={this.deleteUser} /> } />

            <Route component={ My404 } />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
