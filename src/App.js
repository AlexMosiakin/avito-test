import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from './utils/history';

import { NewsContainer } from './containers/NewsContainer';
import { PageNewContainer } from './containers/PageNewContainer';

import "./App.css";

export const App = () => {
const [id, setId] = useState(0);
const handleCallback = (childData) =>{
    setId(childData);
}

return(
<BrowserRouter>
    <Switch>
        <Route exact  path="/avito-test">
            <NewsContainer appCallback={handleCallback}/>
        </Route>
        <Route path="/avito-test/new-item">
                <PageNewContainer newCurrentId={id}/>
        </Route>
    </Switch>
</BrowserRouter>
)
}