import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './components/protectedRoute';

import Home from './components/home';
import User from './components/user';
import Profile from './components/profile';
import Login from './components/login';
import MenuLink from './components/menuLink';
import NotFound from './components/notFound';
import Learn from './components/learn/learn';

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
                  <MenuLink label="首页" to="/home" />
                  <MenuLink label="用户列表" to="/user" />
                  <MenuLink label="个人设置" to="/profile" />
                  <MenuLink label="learn" to="/learn" />
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
                  <Route path="/learn" component={Learn} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
