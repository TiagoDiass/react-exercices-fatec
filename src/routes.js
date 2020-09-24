import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Ex1 from './pages/Ex1';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/ex1" component={Ex1} />
      </Switch>
    </BrowserRouter>
  );
}
