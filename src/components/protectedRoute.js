import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import store from 'store';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return store.get('login') ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location.pathname }
          }}
        />
      );
    }}
  />
);
