import React, { Component } from 'react';

import { ADD_TODO, DELETE_TODO } from '../action-types';
import { store } from '../store';
import TodoItem from './todoItem';

let addTodo = text => ({ type: ADD_TODO, text });
let deleteTodo = index => ({ type: DELETE_TODO, index });

class Todo extends Component {
  constructor() {
    super();
    this.state = store.getState().todo;
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
      this.setState({ lists: store.getState().todo });
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
            <TodoItem
              key={index}
              item={item}
              index={index}
              clickHandler={this.deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
