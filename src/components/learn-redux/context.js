import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

let messages = [1, 2, 3];
let color = 'green';

class Parent extends Component {
  getChildContext() {
    return { color };
  }
  render() {
    return <Son messages={this.props.messages}>12</Son>;
  }
}
class Son extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((item, index) => (
          <GrandSon message={item} key={index} />
        ))}
      </ul>
    );
  }
}

class GrandSon extends Component {
  render() {
    return <li style={{ color: this.context.color }}>{this.props.message}</li>;
  }
}

Parent.childContextTypes = {
  color: PropTypes.string
};
GrandSon.contextTypes = {
  color: PropTypes.string
};

let Context = () => <Parent messages={messages} />;

export default Context;
