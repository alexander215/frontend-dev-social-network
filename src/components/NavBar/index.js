import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom'

const NavBar = ({userInfo, user, logout}) => (
  <div>
          {userInfo ? <NavBarLogged user={user} logout={logout}/> : <NavBarNotLogged /> }
  </div>
)


const NavBarLogged = ({user, logout}) => {
  return(
    <div>
        <Link to={ROUTES.LANDING_PAGE}>Home</Link>
          |  
        <Link to={`/profile/${user._id}`}>Profile</Link>
          |  
        <Link to={ROUTES.CREATE_PROJECT}>Create Project</Link>
          |  
        <Link to={ROUTES.PROFILES_CONTAINER}>All Users</Link>
          |  
        <button onClick={() => logout()}>Logout</button>
        <hr/>
    </div>
  )

}
const NavBarNotLogged = () => {
  return(
    <div>
        <Link to={ROUTES.LANDING_PAGE}>Home</Link>
          |  
        <Link to={ROUTES.PROFILES_CONTAINER}>All Users</Link>
          |  
        <Link to={ROUTES.LOGIN}>Login</Link>
        <hr/>
    </div>
  )
}

export default withRouter(NavBar);