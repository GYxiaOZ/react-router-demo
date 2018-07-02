import React, { Component } from 'react';
import { createStore } from 'redux';
import counter from './reducers/counter';
import { Provider, connect } from 'react-redux';

// import Counter from './counter';

import { ADD, MINUS } from './action-types';

let store = createStore(counter);

let add = amount => ({ type: ADD, amount });
let minus = amount => ({ type: MINUS, amount });

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.onAdd}>+</button>
        <button onClick={this.props.onMinus}>-</button>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  number: state.number
});
let mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(add(1)),
  onMinus: () => dispatch(minus(1))
});

let Child = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

class UseReactReduxLib extends Component {
  render() {
    return (
      <Provider store={store}>
        <Child />
      </Provider>
    );
  }
}

export default UseReactReduxLib;
