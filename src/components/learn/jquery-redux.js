import React, { Component } from 'react';
import $ from 'jquery';
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

class JqueryRedux extends Component {
  componentDidMount() {
    let $counter = $('.counter');
    $counter.html(store.getState().number);
    $('.add').click(() => store.dispatch({ type: ADD, amount: 2 }));
    $('.minus').click(() => store.dispatch({ type: MINUS, amount: 1 }));
    store.subscribe(() => {
      $counter.html(store.getState().number);
    });
  }
  render() {
    return (
      <div className="learn">
        <div className="counter" />
        <button className="add">+</button>
        <button className="minus">-</button>
      </div>
    );
  }
}

export default JqueryRedux;
