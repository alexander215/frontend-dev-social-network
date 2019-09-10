import React, { Component } from 'react';

class Profile extends Component {
    state = {
        user: {
            projects: []
        }
    }
    async componentDidMount () {
        const response = await fetch(`http://localhost:9000/users/${this.props.match.params.id}`)
        const user = await response.json()
        console.log(user, 'THIS IS YOUR FOUND USEWR!!!!!')
        this.setState({
            user: user.data
        })
    }

    handleSubmit = async (id) => {
        const deleteProj = await fetch ('http://localhost:9000/projects/' + id, {
            method: 'DELETE',
            credentials: 'include'
        })
        let array = [...this.state.user.projects]
        console.log(array)
        let index = array.indexOf(id)
        console.log(index)
        array.splice(index, 1)
        this.setState({
            user: {
                ...this.state.user,
                projects: array
            }
        })
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
                                    { (this.props.user.user._id === this.state.user._id) ? <button onClick={() => this.handleSubmit(p._id)}>Delete</button> : '' }
                                </div>
                            )
                        })}
                    </div> 
                    )
                    : <div>No projects yet!</div>}
                    { (this.props.user.user._id === this.state.user._id) ? <div>This is the logged user</div> : <div>Thisis a nobody</div> }

            </div>
        )
    }

}

export default Profile;