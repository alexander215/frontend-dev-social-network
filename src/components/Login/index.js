import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        console.log(JSON.stringify(this.state), "<--this.state in login submit")
        const login = await fetch('http://localhost:9000/users/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedLogin = await login.json();
        console.log(parsedLogin, "<--parsedLogin from login")
    }

    render(){
        console.log(this.state);
        return(
            <div>
                Login:
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <input type="text" name="username" placeholder="Your username" onChange={this.handleChange} />
                    <label>
                        Password:
                    </label>
                    <input type="password" name="password" placeholder="Your password"onChange={this.handleChange} />
                    <button type="submit">
                        Login
                    </button>

                </form>
            </div>
        )
    }
}

export default withRouter(Login);