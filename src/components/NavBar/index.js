import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


// class NavBar extends Component {
//   state= {
//     user: false

//   }
//   componentDidUpdate = async(userInfo, state) => {
//     console.log(state, "<---state in navbar props")
//     console.log(userInfo, "<--component mountuserinfo")
//     console.log(this.state, "<--navbar state")
    
    
//   }

//   render(){
    
//     return(
//         <div>
//           {this.state.user ? <NavBarLogged /> : <NavBarNotLogged /> }
//         </div>
//     )

//   }
// }

const NavBar = ({userInfo}) => (
  <div>
          {userInfo ? <NavBarLogged /> : <NavBarNotLogged /> }
  </div>
)


const NavBarLogged = () => {
  return(
    <div>
        <Link to={ROUTES.LANDING_PAGE}>Home</Link>
          |  
        <Link to={ROUTES.PROFILE}>Profile</Link>
          |  
        <Link to={ROUTES.CREATE_PROJECT}>Create Project</Link>
          |  
        <Link to={ROUTES.PROFILES_CONTAINER}>All Users</Link>
          |  
        <Link to='/logout'>Logout</Link>
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
        <Link to={ROUTES.REGISTER}>Login</Link>
        <hr/>
    </div>
  )

}

export default NavBar;