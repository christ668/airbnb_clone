import * as React from'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { RegisterConnector } from '../modules/register/registerConnector';

export const Routes =() => (
    <BrowserRouter>
       <Switch>
            <Route exact={true} path="/register" component ={RegisterConnector} />
        </Switch>
    </BrowserRouter>
);