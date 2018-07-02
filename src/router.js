import React, { Component } from 'react';
import { Route,Link,Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import Login from './components/Login/Login';


const routes = () =>(
    <BrowserRouter>
    <switch>
        <Route path="/login" component={Login} />
    </switch>
    </BrowserRouter>
);

export default routes;
