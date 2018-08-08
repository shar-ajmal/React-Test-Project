import React from 'react';
import ReactDOM from 'react-dom';

import Input from './components//Input';
import UserList from './components/UserList';

class InfoForm extends React.Component {
    constructor(props) {
        super(props);
        this.id_counter = 0;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            id: null,
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
        let user = {
            id: (this.id_counter++),
            name: this.state.name,
            email: this.state.email,
            hobby: this.state.hobby,
        };

        this.state.userList.push(user);

        this.setState({
            name: "",
            email: "",
            hobby: "",
        })

        e.preventDefault()
        e.target.reset();
    }

    handleDelete(id) {
        let users = this.state.userList;
        let index = users.findIndex(user =>  user.id === id);
        console.log("this id is at index " + index);
        users.splice(index, 1);
        this.setState({userList: users});
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
                    <UserList users={this.state.userList} onDelete={this.handleDelete}/>
                </div>
            </form>
        );
    }
}

/*ReactDOM.render(
    <InfoForm/>,
    document.getElementById('root')
);*/

export default InfoForm;
