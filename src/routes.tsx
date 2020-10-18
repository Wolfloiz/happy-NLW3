import React from 'react';
import{BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/landing';
import OrphanagesMap from './pages/orphanagesMap';
import CreateOrphanage from './pages/CreateOrphanage';
import Orphanages from './pages/Orphanage';

function Routes(){
    return(
 
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/app" component={OrphanagesMap}/>
        <Route path="/orphanages/create" exact component={CreateOrphanage}/>
        <Route path="/orphanages/:id" exact component={Orphanages}/>
        </Switch>
        </BrowserRouter>

    );
}
export default Routes;