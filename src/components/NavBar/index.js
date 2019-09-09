import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';


class NavBar extends Component {
  state= {
    user: false

  }
  componentDidUpdate = async(userInfo, state) => {
    console.log(state, "<---state in navbar props")
    console.log(userInfo, "<--component mountuserinfo")
    console.log(this.state, "<--navbar state")
    
    
  }

  render(){
    
    return(
        <div>
          {this.state.user ? <NavBarLogged /> : <NavBarNotLogged /> }
        </div>
    )

  }
}

// const NavBar = ({userInfo}) => (
//   <div>
//           {userInfo ? <NavBarLogged /> : <NavBarNotLogged /> }
//         </div>
// )


const NavBarLogged = () => {
  return(
    <div>
        <a href={ROUTES.LANDING_PAGE}>Home</a>
          |  
        <a href='/profile'>Profile</a>
          |  
        <a href={ROUTES.PROFILES_CONTAINER}>All Users</a>
          |  
        <a href='/logout'>Logout</a>
        <hr/>
    </div>
  )

}
const NavBarNotLogged = () => {
  return(
    <div>
        <a href={ROUTES.LANDING_PAGE}>Home</a>
          |  
        <a href={ROUTES.PROFILES_CONTAINER}>All Users</a>
          |  
        <a href={ROUTES.REGISTER}>Login</a>
        <hr/>
    </div>
  )

}

export default NavBar;