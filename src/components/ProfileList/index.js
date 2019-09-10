import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


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
        // console.log(this.state, "<-- this.state in Profile list")
    }

    userList = async(data) => {
        try{
            const userResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/`, {
                method: 'GET',
                credentials: 'include',
                body: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await userResponse.json();
            // console.log(this.props.location, '<--this.props.location in ProfileList')

            return parsedResponse.data;

        }catch (err){
            console.log(err);
        }

    }

    render() {
        return (
                this.state.allUsers.map(singleUser => 
                    <div>
                        <Link to={`/profile/${singleUser._id}`}><div>{singleUser.username}</div></Link>
                        <div>Email: {singleUser.email}</div>

                    </div>
                    )
        )
    }
}

export default ProfileList;