import React from 'react';
import { createStore, applyMiddleware } from '../../../mini-redux/redux';
import counter from '../reducers/counter';
import { ADD, MINUS } from '../action-types';
import logger from '../../../mini-redux/logger';
// import thunk from '../../../mini-redux/thunk';
import promise from '../../../mini-redux/promise';

let add = amount => ({ type: ADD, amount });
let minus = amount => ({ type: MINUS, amount });

// const store = createStore(counter);
const store = applyMiddleware(promise)(createStore)(counter);
const dispatch = store.dispatch;

class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  onAdd = () => dispatch(add(1));
  onMinus = () => dispatch(minus(1));
  onAsyncAdd = () =>
    dispatch(next => {
      setTimeout(() => {
        next(add(1));
      }, 2000);
    });
  onPromiseAdd = () => {
    dispatch(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(add(1));
        }, 2000);
      })
    );
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }
  componentWillUnmount = () => {
    this.unsubscribe();
  };
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.onAdd}>+</button>
        <button onClick={this.onMinus}>-</button>
        <button onClick={this.onAsyncAdd}>async +</button>
        <button onClick={this.onPromiseAdd}>promise +</button>
      </div>
    );
  }
}

export default Counter;
