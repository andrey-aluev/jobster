import React from 'react';
import AppHeader from '../AppHeader';
import { Route, Switch } from 'react-router-dom';

import { AddCandidate, AddPosition, ConfirmPosition, HomePage } from '../Pages';

import './bootstrap.min.css';
import Alert from '../Alert/Alert';

import './App.css';

const App = () => {
  return (
    <>
      <AppHeader/>

      <main className="app__body">
        <Alert/>

        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/add-position" exact component={AddPosition}/>
          <Route path="/add-candidate" exact component={AddCandidate}/>
          <Route path="/confirm-position" exact component={ConfirmPosition}/>
        </Switch>
      </main>

      <footer className="app__footer container mt-4 p-4 border-top">
        <p>&copy; Jobster</p>
      </footer>
    </>
  );
};

export default App;
