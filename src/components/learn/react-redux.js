import React, { Component } from 'react';
import { createStore } from '../../redux';

const ADD = 'ADD';
const MINUS = 'MINUS';

let reducer = (state = { number: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { number: state.number + action.amount };
    case MINUS:
      return { number: state.number - action.amount };
    default:
      return state;
  }
};

let store = createStore(reducer);

let add = amount => ({ type: ADD, amount });
let minus = amount => ({ type: MINUS, amount });

class ReactRedux extends Component {
  constructor() {
    super();
    this.state = {
      number: store.getState().number
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
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
