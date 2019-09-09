import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import LandingPage from '../LandingPage';
import ProfilesContainer from '../ProfilesContainer';
import NavBar from '../NavBar';
import * as ROUTES from '../../constants/routes';
import Register from '../Register';
import Profile from '../Profile';
import CreateProject from '../CreateProject';

const My404 = () => {
  return (
    <div>
      <h2>Woops, that looks like a wrong turn.</h2>
      <a href='/'>Want to head home?</a>
    </div>
  )
}

class App extends Component {
  state ={
    user: '' 
    // {
    //   // username:"bob"
    // }
    ,
    isLogged: false,
    loading: true
  }

  componentDidMount() {
    // console.log(this.state, "<--main component did mountttt")
  }
  


  register = async (data) => {
    console.log(data, "<--data, and hitting register function in index")
    const register = await fetch('http://localhost:9000/users/register', {
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
  

  render(){
    console.log(this.state.user, "<--this.state in index")
    return (
      <div>
        {/* <NavBar userInfo={this.state.user} state={this.state.user}/> */}
        <NavBar userInfo={this.state.isLogged} />
    {/* {this.state.user ? <NavBar userInfo={this.state}/> : null } */}
        
        <Switch>
          <Route exact path={ROUTES.LANDING_PAGE} component={ LandingPage } />
          <Route exact path={ROUTES.PROFILES_CONTAINER} render={(props) => <ProfilesContainer  user = { this.state.user} /> }/>
          
          {/* <Route exact path={ROUTES.PROFILES_CONTAINER} render=component= { ProfilesContainer } /> */}
          <Route exact path={ROUTES.PROFILE} render={(props) => <Profile user={this.state.user} {...props}/>} />
          <Route exact path={ROUTES.REGISTER} render={(props) => <Register  {...props} register={this.register} />} />
          <Route exact path={ROUTES.CREATE_PROJECT} render={(props) => <CreateProject {...props} user={this.state.user} /> } />
          <Route component={ My404 } />
        </Switch>

      </div>
    );
  }
}

export default App;
