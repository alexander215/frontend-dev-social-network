import React, { Component } from 'react';

class Profile extends Component {
    state = {
        user: {
            projects:[]
        }
    }
    async componentDidMount () {
        const response = await fetch(`http://localhost:9000/users/${this.props.match.params.id}`)
        const user = await response.json()
        console.log(user)
        this.setState({
            user: user.data
        })

    }
    render(){
        console.log(this.state, '<--this.state in profile')
        // console.log(this.props, "<--this.props in Profile component")
        console.log(this.state.user.projects, '<--this.state.user.projects')
        return(
            // this.state.user.map(userInfo =>
            //     <div>
            //         {userInfo}
            //     </div>
            //     )
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
                                </div>
                            )
                        })}
                    </div> 
                    )
                    : <div>No projects yet!</div>}
                { (this.state.user._id === this.props.match.params.id) ? <div>Yes!</div> : <div>No!</div>}

            </div>
        )
    }

}

export default Profile;