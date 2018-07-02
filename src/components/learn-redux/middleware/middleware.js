import React from 'react';
import { createStore, applyMiddleware } from '../../../mini-redux/redux';
import counter from '../reducers/counter';
import { ADD, MINUS } from '../action-types';
import logger from '../../../mini-redux/logger';

let add = amount => ({ type: ADD, amount });
let minus = amount => ({ type: MINUS, amount });

// const store = createStore(counter);
const store = applyMiddleware(logger)(createStore)(counter);
const dispatch = store.dispatch;

class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  onAdd = () => dispatch(add(1));
  onMinus = () => dispatch(minus(1));
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
      </div>
    );
  }
}

export default Counter;
