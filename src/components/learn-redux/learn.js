import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import JqueryRedux from './jquery-redux';
import ReactRedux from './react-redux';
import Todo from './todo/todo';
import Context from './context';
import Counter from './counter';
import Provider from '../../mini-redux/provider';
import UseReactReduxLib from './useReactReduxLib';
import Middleware from './middleware/middleware';

import { createStore } from '../../mini-redux/redux';
import counter from './reducers/counter';
let store = createStore(counter);

let LearnLink = props => (
  <li>
    <Link to={`/learn/${props.to}`}>{props.title || props.to}</Link>
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
            <LearnLink to="middleware" />
            <LearnLink to="use-react-redux-lib" title="用react-redux库计数器" />
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
          <Route
            path="/learn/counter"
            component={() => (
              <Provider store={store}>
                <Counter />
              </Provider>
            )}
          />
          <Route
            path="/learn/use-react-redux-lib"
            component={UseReactReduxLib}
          />
          <Route path="/learn/middleware" component={Middleware} />
        </div>
      </div>
    );
  }
}

export default Learn;
