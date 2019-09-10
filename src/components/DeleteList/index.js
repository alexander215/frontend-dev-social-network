import React, { Component } from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom'


class DeleteList extends Component {
    state={
        allUsers: []
    }

    componentDidMount = async () => {
        console.log('component did mount')
        const userList = await this.userList()
        this.setState({
            allUsers: userList
        })
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
            return parsedResponse.data;
        }catch (err){
            console.log(err);
        }
    }

    handleSubmit = async(id) => {
        const deleteReq = await fetch('http://localhost:9000/users/' + id, {
            method: 'DELETE',
            credentials: 'include'
        } )
        console.log(deleteReq, '<--deleteReq in profile')
        this.setState({
            allUsers: [...this.state.allUsers].filter(u => u._id !== id)
        })
    }

    render() {
        return (
                this.state.allUsers.map(singleUser => 
                    <div>
                        <Link to={`/profile/${singleUser._id}`}><div id={singleUser._id}>{singleUser.username}</div></Link>
                        <div>Email: {singleUser.email}</div>
                        <button onClick={() => this.handleSubmit(singleUser._id)}>Delete</button>

                    </div>
                    )
        )
    }
}

export default DeleteList;