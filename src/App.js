import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewsContainer } from './containers/NewsContainer';
import { PageNewContainer } from './containers/PageNewContainer';

export const App = () => 
<BrowserRouter>
    <Switch>
        <Route path="/news" component={NewsContainer} />
        <Route path="/new-item" component={PageNewContainer}/>
    </Switch>
</BrowserRouter>