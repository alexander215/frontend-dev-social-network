import React, { Component } from 'react';

class Login extends Component {
    state = {
        username: '',
        password: '',
        message: ''
    }
    render(){
        return(
            <div>
                Login:
                <form>
                    <label>
                        Username:
                    </label>
                    <input type="text" placeholder="Your username" />
                    <label>
                        Password:
                    </label>
                    <input type="text" placeholder="Your password" />
                    <button type="submit">
                        Login
                    </button>

                </form>
            </div>
        )
    }
}

export default Login;