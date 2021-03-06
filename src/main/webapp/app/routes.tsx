/* tslint:disable */ import * as React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './shared/layout/private-route/private-route';
import Login from './modules/login/login';
import Logout from './modules/login/logout';
import Home from './modules/home/home';
import Admin from './modules/administration';
import SalesChannels from './modules/sales-channels';
import Account from './modules/account';
import SocialAuth from './modules/login/social-auth';

const Routes = () => (
  <div className="view-routes">
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/social-auth" component={SocialAuth} />
    <Route path="/logout" component={Logout} />
    <PrivateRoute path="/admin" component={Admin} />
    <PrivateRoute path="/sales-channels" component={SalesChannels} />
    <PrivateRoute path="/account" component={Account} />
  </div>
);

export default Routes;
