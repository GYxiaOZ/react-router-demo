import React, { Component } from 'react';
import store from 'store';

class UserEdit extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let name = this.name.value;
    let users = store.get('users') || [];
    users.push({ id: Date.now(), name });
    store.set('users', users);
    this.props.history.push('/user/list');
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            ref={ref => (this.name = ref)}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    );
  }
}

export default UserEdit;
