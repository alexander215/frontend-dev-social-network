import React, { Component } from 'react';

class Profile extends Component {
    state = {
        user: {
            projects:[]
        },
        currentUser: ''
    }
    async componentDidMount () {
        const response = await fetch(`http://localhost:9000/users/${this.props.match.params.id}`)
        const user = await response.json()
        this.setState({
            user: user.data,
            currentUser: this.props.user
        })
        console.log(this.state.currentUser.user._id, "<--currentUser id in profile")
        console.log(this.state.user._id, "<-- this.state")
    }

    render(){
        return(
            <div>
                Name: {this.state.user.username}
                Email: {this.state.user.email}
                { (this.state.user.projects.length)
                    ? (
                    <div>
                        {this.state.user.projects.map(p =>{
                            return (
                                <div>
                                    <h1>{p.title}</h1>
                                    <p>{p.description}</p>
                                    <a href={p.link}>Link!</a>
                                    { (this.state.currentUser.user._id === this.state.user._id) ? <button>Delete</button> : null }
                                </div>
                            )
                        })}
                    </div> 
                    )
                    : <div>No projects yet!</div>}
                    {/* { (this.state.currentUser.user._id === this.state.user._id) ? <div>This is the logged user</div> : <div>Thisis a nobody</div> } */}

            </div>
        )
    }

}

export default Profile;