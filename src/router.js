import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter,Switch } from 'react-router-dom';
import Posts from './containers/Blog/posts/posts';

import Login from './components/Login/Login';


const routes = () =>(
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" exact  component={Posts} />
    </Switch>
    </BrowserRouter>
);

export default routes;
