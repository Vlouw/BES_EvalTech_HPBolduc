import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import App from './App';
import NotFound from './NotFound';

// Router to show the required component
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/RAT' component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;