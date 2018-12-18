import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CharityHome from './components/charityhome';
import Charity from './containers/Charity';
import Incentives from './containers/Incentives';
import Account from './containers/Account';
import Fallback from './containers/Fallback';

const Router = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Charity} />
        <Route exact path="/charity" component={CharityHome} />
        <Route exact path="/incentives/:id" component={Incentives} />
        <Route exact path="/account/:id" component={Account} />
        <Route component={Fallback} />
 
      </Switch>
    </BrowserRouter>

  )
}

export default Router;