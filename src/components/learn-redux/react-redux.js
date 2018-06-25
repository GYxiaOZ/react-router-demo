import React, { Component } from 'react';
import { ADD, MINUS } from './action-types';
import { store } from './store';

let add = amount => ({ type: ADD, amount });
let minus = amount => ({ type: MINUS, amount });

class ReactRedux extends Component {
  constructor() {
    super();
    this.state = {
      number: store.getState().counter.number
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter.number });
    });
  }
  componentWillUnmount = () => {
    this.unsubscribe();
  };
  handleClick = action => {
    store.dispatch(action);
  };
  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button
          onClick={() => {
            this.handleClick(add(1));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.handleClick(minus(1));
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default ReactRedux;
