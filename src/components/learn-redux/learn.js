import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import JqueryRedux from './jquery-redux';
import ReactRedux from './react-redux';
import Todo from './todo/todo';
import Context from './context';
import Counter from './counter';

let LearnLink = props => (
  <li>
    <Link to={`/learn/${props.to}`}>{props.to}</Link>
  </li>
);

class Learn extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <ul>
            <LearnLink to="jquery" />
            <LearnLink to="react" />
            <LearnLink to="todo" />
            <LearnLink to="combineReducer" />
            <LearnLink to="context" />
            <LearnLink to="counter" />
          </ul>
        </div>
        <div className="col-sm-9">
          <Route path="/learn/jquery" component={JqueryRedux} />
          <Route path="/learn/react" component={ReactRedux} />
          <Route path="/learn/todo" component={Todo} />
          <Route
            path="/learn/combineReducer"
            component={() => (
              <div>
                <ReactRedux />
                <Todo />
              </div>
            )}
          />
          <Route path="/learn/context" component={Context} />
          <Route path="/learn/counter" component={Counter} />
        </div>
      </div>
    );
  }
}

export default Learn;
