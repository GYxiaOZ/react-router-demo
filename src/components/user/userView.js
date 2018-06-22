import React, { Component } from 'react';
import store from 'store';

class UserView extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount() {
    let users = store.get('users') || [];
    let user =
      users.find(item => item.id + '' === this.props.match.params.id) || {};

    this.setState({
      user
    });
  }
  render() {
    return <div>name: {this.state.user.name}</div>;
  }
}

export default UserView;
