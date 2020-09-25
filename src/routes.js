import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Ex1 from './pages/Ex1';
import Ex2 from './pages/Ex2';
import Ex3 from './pages/Ex3';
import Ex4 from './pages/Ex4';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/ex1" component={Ex1} />
        <Route path="/ex2" component={Ex2} />
        <Route path="/ex3" component={Ex3} />
        <Route path="/ex4" component={Ex4} />
      </Switch>
    </BrowserRouter>
  );
}
