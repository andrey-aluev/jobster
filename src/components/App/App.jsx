import React from 'react';
import AppHeader from '../AppHeader';
import { Route, Switch } from 'react-router-dom';

import { AddCandidate, AddPosition, HomePage } from '../Pages';

import './bootstrap.min.css';
import { connect } from 'react-redux';
import Alert from '../Alert/Alert';

const App = ({ message }) => {
  return (
    <div className="app">
      <AppHeader/>

      <Alert message={message}/>

      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/add-position" exact component={AddPosition}/>
        <Route path="/add-candidate" exact component={AddCandidate}/>
      </Switch>

      <footer className="container mt-4 p-4 border-top">
        <p>&copy; Jobster</p>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  message: state.app.message,
});

export default connect(mapStateToProps, {})(App);
