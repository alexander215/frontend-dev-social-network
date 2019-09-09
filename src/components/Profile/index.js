import React, { Component } from 'react';

class Profile extends Component {
    state = {
        user: {}
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
        console.log(this.props, "<--this.props in Profile component")
        return(
            <div>
                Name: {this.state.user.username}
                Email: {this.state.user.email}
            </div>
        )
    }

}

export default Profile;