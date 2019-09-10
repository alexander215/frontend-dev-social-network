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