import React from 'react';
import ReactDOM from 'react-dom';

const UserList = function (props) {
    console.log(props.users);
    const users = props.users;
    const userList = users.map((user) => {
        return (
            <div>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.hobby}</li>
            </div>
        )
    })
    return userList;
}

export default UserList;