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
        console.log(this.props.user, "<-- this.props in CreateProject")
        this.setState({
            user: this.props.user
        })
    }

    handleChange = (e) => {
        console.log(this.state)


    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        Title:
                    </label>
                    <input type='text' name='title' placeholder='What is the title?' />
                    <label>
                        Description:
                    </label>
                    <input type='text' name='description' placeholder='Describe the project' />
                    <label>
                        Link:
                    </label>
                    <input type='text' name='link' placeholder='Link to project' />
                </form>
            </div>
        )
    }
}

export default CreateProject;