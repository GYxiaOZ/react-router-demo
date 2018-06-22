import React, { Component } from 'react';
import store from 'store';
import { Prompt } from 'react-router-dom';

class UserEdit extends Component {
  constructor() {
    super();
    this.state = {
      blocking: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let name = this.name.value;
    let users = store.get('users') || [];
    users.push({ id: Date.now(), name });
    store.set('users', users);
    this.setState(
      {
        blocking: false
      },
      () => {
        this.props.history.push('/user/list');
      }
    );
  };
  handlerChange = event => {
    this.setState({
      blocking: event.target.value && event.target.value.length > 0
    });
  };
  render() {
    return (
      <div>
        <Prompt
          when={this.state.blocking}
          message={location => `确认跳转到${location.pathname}?`}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handlerChange}
              ref={ref => (this.name = ref)}
            />
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default UserEdit;
