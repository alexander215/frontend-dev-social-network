import React, { Component } from 'react'

// create a comp where you can fill a form out to create a new project 
// make sure the user object is passed into this component 
// post request to back end 


class CreateProject extends Component {
    state = {
        title: '',
        description: '',
        link: '',
        user: {}
    }

    componentDidMount () {
        this.setState({
            user: this.props.user
        })
    }

    handleChange = (e) => {
        console.log(this.state)
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hitting handleclicke');
    }

    render() {
        return(
            <div>
                <h1>Create Project:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    </label>
                    <input type='text' name='title' placeholder='What is the title?' onChange={this.handleChange}/>
                    <label>
                        Description:
                    </label>
                    <input type='text' name='description' placeholder='Describe the project' onChange={this.handleChange}/>
                    <label>
                        Link:
                    </label>
                    <input type='text' name='link' placeholder='Link to project' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateProject;