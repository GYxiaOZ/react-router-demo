import React from 'react';
import { connect } from '../../mini-redux/connect';
import { ADD, MINUS } from './action-types';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
