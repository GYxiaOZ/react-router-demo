import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentWillMount() {
    let users = store.get('users') || [];
    this.setState({
      users
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.state.users.map(item => (
          <li className="list-group-item" key={item.id}>
            <Link to={`/user/view/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default UserList;
