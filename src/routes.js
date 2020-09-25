import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';
import Ex5 from './pages/Ex5';
import Ex6 from './pages/Ex6';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/ex1" component={Ex1} />
        <Route path="/ex2" component={Ex2} />
        <Route path="/ex3" component={Ex3} />
        <Route path="/ex4" component={Ex4} />
        <Route path="/ex5" component={Ex5} />
        <Route path="/ex6" component={Ex6} />
      </Switch>
    </BrowserRouter>
  );
}
