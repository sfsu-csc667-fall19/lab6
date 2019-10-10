import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import { connect } from 'react-redux';

const App = ({ isLoggedIn }) => {
  return (
    <div className="App">
      <div className="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        {!isLoggedIn && (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <Link to="/notes">Notes</Link>
          </div>
        )}
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/notes" component={Notes} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(App);
