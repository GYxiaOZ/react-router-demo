import React, { Component } from 'react';
import { createStore } from '../../../redux';

const ADD = 'ADD_TODO';
const DELETE = 'DELETE_TODO';

let reducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case ADD:
      return { lists: action.lists };
    case DELETE:
      return {};
    default:
      return state;
  }
};

let store = createStore(reducer);

let add = amount => ({ type: ADD, amount });

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      lists: store.getState().lists
    };
  }
  handleKeyUp = event => {
    if (event.keyCode === 13 && event.target.value) {
      let lists = [...this.state.lists, event.target.value];
      event.target.value = '';
      this.setState({
        lists
      });
    }
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ lists: store.getState().lists });
    });
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} />
        <ul>
          {this.state.lists.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default Todo;
