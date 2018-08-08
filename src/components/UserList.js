import React from 'react';
import ReactDOM from 'react-dom';

import UserListItem from './UserListItem';

class UserList extends React.Component {
    deleteItem(id) {
        this.props.onDelete(id);
        console.log('We are deleting element with id ' + id);
    }

     render() {
        let userList = this.props.users.map((user) => {
            return (
                <div>
                    <UserListItem item={user}/>
                    <button type="button" onClick={() => this.deleteItem(user.id)}>X</button>
                </div>
            );
        });
        console.log(userList);
        return userList;
    }
}

export default UserList;