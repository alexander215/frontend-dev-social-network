import React, { Component } from 'react';

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

    render() {
        return (
            <div>
                Register:
                <form>
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

export default Register;