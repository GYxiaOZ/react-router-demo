import React from 'react';
import { PropTypes } from 'prop-types';

export default class Provider extends React.Component {
  getChildContext() {
    console.log(this.props.store);
    return { store: this.props.store };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};
