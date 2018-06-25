import React, { Component } from 'react';
import { createStore } from '../../redux';
import counter from './reducers/counter';
let store = createStore(counter);

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { number: store.getState().number };
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        number: store.getState().number
      });
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}
