import React, { Component } from 'react';

class ProfileList extends Component {
    state={
        allUsers: []
    }

    componentDidMount = async () => {
        console.log('component did mount')
        const userList = await this.userList()
        this.setState({
            allUsers: userList
        })
        console.log(this.state, "<-- this.state in Profile list")
    }

    userList = async(data) => {
        try{
            const userResponse = await fetch('http://localhost:9000/users/', {
                method: 'GET',
                credentials: 'include',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await userResponse.json();
            console.log(this.props.location, '<--this.props.location in ProfileList')

            return parsedResponse.data;

        }catch (err){
            console.log(err);
        }

    }

    render() {
        return (
                this.state.allUsers.map(singleUser => 
                    <div>
                        <div>{singleUser.username}</div>
                        <div>localhost3000{singleUser._id} </div>

                    </div>
                    )
        )
    }
}

export default ProfileList;