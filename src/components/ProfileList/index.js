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

            return parsedResponse.data;

        }catch (err){
            console.log(err);
        }

    }

    // fullUserList =()=> this.allUsers.map(singleUser => {
    //     return (
    //         <div>
    //             <li key={singleUser._id}>
    //                 <div>{singleUser.username}</div>
    //             </li>
    //         </div>
    //     )
    // })

    render() {
        return (
                this.state.allUsers.map(singleUser => 
                    <div>
                        <div>{singleUser.username}</div>

                    </div>
                    )
        )
    }
}

export default ProfileList;