import React from 'react';
import { Route, Link } from 'react-router-dom';

const Menu = ({ to, label }) => (
  <Route
    path={to}
    children={({ match, location }) => {
      return (
        <li
          className={
            location.pathname.indexOf(match && match.path) !== -1
              ? 'active'
              : null
          }
        >
          <Link to={to}>{label}</Link>
        </li>
      );
    }}
  />
);

export default Menu;
