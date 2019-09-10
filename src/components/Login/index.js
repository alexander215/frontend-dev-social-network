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
        console.log('hit login')
        e.preventDefault();
        const loginFunc = this.props.login(this.state);
        console.log(this.state, '<--this.state in login')
        console.log(loginFunc, "<--loginfunc in login")

        loginFunc.then((data) => {
            console.log(data, "<--date in login")
            this.props.history.push({
                pathname: '/users',
                state: {
                    username: this.state.username,
                    user: loginFunc.data,
                    isLogged: true
                }
            })
        })
        // console.log(JSON.stringify(this.state), "<--this.state in login submit")
        // const login = await fetch('http://localhost:9000/users/login', {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const parsedLogin = await login.json();
        // console.log(parsedLogin.status.message, "<--parsedLogin from login")
        // if (parsedLogin.status.message === "User logged in") {
        //     console.log('logged in!!!!')
        // }
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