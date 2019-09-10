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
        const createProject = await this.newProj();
        console.log(createProject, "<--create project in handle submit")
        this.setState({
            user: createProject
        })
        // console.log(this.state.user._id, "<this.state.user._id")
        // console.log(JSON.stringify(this.state), '<--e in create project')
        this.props.history.push(`/profile/${this.state.user.data.newProject.created_by}`);
        
    }

    newProj = async(e) => {
        try{
            const createResponse = await fetch('http://localhost:9000/projects/create', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(createResponse, '<--create response')
        const parsedResponse = await createResponse.json();
        console.log(parsedResponse, '<--parsedresonse')
        return parsedResponse;
        } catch(err){
            console.log(err);
        }

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