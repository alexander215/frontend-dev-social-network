import React from 'react';

const NavBar = () => {
    return(
        <div>
            <a href='/'>Home</a>
              |  
            <a href='/users'>All Users</a>
              |  
            <a href='/logout'>Logout</a>
        </div>
    )
}

export default NavBar;