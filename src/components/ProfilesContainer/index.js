import React, { Component } from 'react';
import ProfileList from '../ProfileList';

class ProfilesContainer extends Component {
    state = {
        user: null,
        currentUser: {
            username: '',
        }
    }
    componentDidMount = async (props) => {
        
        console.log(this.state, "<--this.state in profiles container")
        console.log(props, '<--props, in component did mount in profiles container')
        // this.setState({
        //     currentUser:
        // })
    }
    // componentDidMount = async () => {
    //     console.log('component did mount')
    //     const userList = await this.userList()
    //     this.setState({
    //         allUsers: userList
    //     })
    //     console.log(this.state, "<-- this.state in Profile list")
    // }
    render(){
        return (
            <div>
                <h1>Welcome {this.state.currentUser.username}</h1>
                <h3>All Users:</h3>
                <ProfileList />
            </div>
        )
    }
}

export default ProfilesContainer;