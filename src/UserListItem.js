import React from 'react';
import ReactDOM from 'react-dom';

const UserListItem = function(props) {
    return (
        <div>
            <h5>UserId: {props.item.id}</h5>
            <li>Name: {props.item.name}</li>
            <li>Email: {props.item.email}</li>
            <li>Hobby: {props.item.hobby}</li>
            <br/>
        </div>
    )
}

export default UserListItem;