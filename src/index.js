import React from 'react';
import ReactDOM from 'react-dom';

import Input from './Input';
import UserList from './UserList';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: null,
            email: null,
            hobby: null,
            
            userList: [],
        }
    }

    handleChange(event, messageType) {
        this.setState({[messageType]: event.target.value});
    }

    handleSubmit(e) {
        this.state.userList.push({
            name: this.state.name,
            email: this.state.email,
            hobby: this.state.hobby,
        });

        this.setState({
            name: "",
            email: "",
            hobby: "",
        })
        
        e.preventDefault()
        e.target.reset();
    }

    render() {
        return (
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                <h1>Fill out the form</h1>
                <Input type="name" onChange={this.handleChange}/><br/>
                <Input type="email" onChange={this.handleChange}/><br/>
                <Input type="hobby" onChange={this.handleChange}/><br/>
                <button type="submit">Submit</button>
                <h2>User Input</h2>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Hobby: {this.state.hobby}</p>
                <div>
                    <h2>List of Users</h2>
                    <UserList users={this.state.userList}/>
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <InfoForm/>,
    document.getElementById('root')
);
