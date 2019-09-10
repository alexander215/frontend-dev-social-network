import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Register extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
        console.log(this.state)
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const registerFunc = this.props.register(this.state);
        // console.log(this.state, "<--this.statein resgister")
        // console.log(registerFunc, "<--registerfunc in register")
        // console.log(registerFunc, "<--return parsed reg")

        registerFunc.then((data) => {
            // console.log(data, "<finallyyyy!!!!!!")
            // console.log(this.props.history, "<--this.props.history in register")
            // // this.props.history.push('/users'),
            this.props.history.push({
                    pathname: '/users',
                    state: {
                        username: this.state.username,
                        user: registerFunc.data,
                        isLogged: true
                    }
                });
            
        })
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