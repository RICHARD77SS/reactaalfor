import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Store from '../components/store';

export default () => (
  <Switch>
    <Route exact path='/'>
      
    </Route>
    <Route exact path='/store'>
      <Store />
    </Route>
    <Route exact path='/abault'>
      <h1>Abault</h1>
    </Route>
    <Route exact path='/contact'>
      <h1>Contact</h1>
    </Route>
  </Switch>
)