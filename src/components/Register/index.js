import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Register extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        user: null,
        isLogged: false
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const register = await fetch('http://localhost:9000/users/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedRegister = await register.json();
        console.log(parsedRegister, '<---parsedRegister from Register route')

        if (parsedRegister.status.message === 'User logged in') {
            this.props.history.push({
                pathname: '/users',
                state: {
                    username: this.state.username,
                    user: parsedRegister.data,
                    isLogged: true
                }
            });
        }
        console.log(this.props, '<--this.props in ./register')
        console.log(this.state, '<--this.state in register')
    }

    render() {
        return (
            <div>
                Register:
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                    </label>
                    <input type='text' name='username' placeholder='Your username' onChange={this.handleChange} />
                    <label>
                        Password:
                    </label>
                    <input type='password' name='password' placeholder='Your password' onChange={this.handleChange} />
                    <label>
                        Email:
                    </label>
                    <input type='text' name='email' placeholder='Your email' onChange={this.handleChange} />
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default withRouter(Register);