import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import UserList from './user/userList';
import UserEdit from './user/userEdit';
import UserView from './user/userView';

export default class User extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <ul className="nav nav-stacked">
            <li>
              <Link to="/user/list">用户列表</Link>
            </li>
            <li>
              <Link to="/user/edit">新增用户</Link>
            </li>
          </ul>
        </div>
        <div className="col-sm-10">
          {this.props.location.pathname === '/user' && (
            <Redirect to="/user/list" />
          )}
          <Route path="/user/list" component={UserList} />
          <Route path="/user/edit" component={UserEdit} />
          <Route path="/user/view/:id" component={UserView} />
        </div>
      </div>
    );
  }
}
