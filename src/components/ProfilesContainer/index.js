import React, { Component } from 'react';
import ProfileList from '../ProfileList';
import * as ROUTES from '../../constants/routes'

class ProfilesContainer extends Component {
    state = {
        user: this.props.user,
        username: null,
        currentUser: {
            username: '',
        }
    }

    render(){
        console.log(this.props, '<---- this.props in ProfilesContainer')
        return (
            <div>
                { this.props.user ? <WelcomeLogged /> : <WelcomeUnlogged />} 
                
                <h3>All Users:</h3>
                <ProfileList />
            </div>
        )
    }
}

const WelcomeLogged = ()=>  {
    return(
        <h1>Welcome {this.props.user.username}</h1>
    )
}
const WelcomeUnlogged = ()=>  {
    return(

        <h1>Welcome Visitor</h1>
    )
}

export default ProfilesContainer;