import React, { Component } from 'react';

import { ADD_TODO, DELETE_TODO } from '../action-types';
import { store } from '../store';

let addTodo = text => ({ type: ADD_TODO, text });
let deleteTodo = index => ({ type: DELETE_TODO, index });

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      lists: store.getState().todo.lists
    };
  }
  handleKeyUp = event => {
    if (event.keyCode === 13 && event.target.value) {
      store.dispatch(addTodo(event.target.value));
      event.target.value = '';
    }
  };
  deleteTodo = index => {
    store.dispatch(deleteTodo(index));
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ lists: store.getState().todo.lists });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleKeyUp} />
        <ul>
          {this.state.lists.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => {
                  this.deleteTodo(index);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
