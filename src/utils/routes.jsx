import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Store from '../components/store';
import About from '../components/about';
import Contact from '../components/contact';

export default () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/store'>
      <Store />
    </Route>
    <Route exact path='/abault'>
      <About />
    </Route>
    <Route exact path='/contact'>
      <Contact />
    </Route>
    <Route exact path='/admi'>
      <Contact />
    </Route>
  </Switch>
)