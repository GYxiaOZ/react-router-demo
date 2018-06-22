import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './components/protectedRoute';

import Home from './components/home';
import User from './components/user';
import Profile from './components/profile';
import Login from './components/login';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  中心
                </Link>
              </div>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/user">User</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Switch>
                  <Route exact path="/" render={() => <div>index</div>} />
                  <Route path="/home" component={Home} />
                  <Route path="/user" component={User} />
                  <Route path="/login" component={Login} />
                  <ProtectedRoute path="/profile" component={Profile} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
