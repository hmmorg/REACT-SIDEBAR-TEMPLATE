import React from 'react';
import { Route} from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import User from '../../User/User';
function Routes() {
    return (
        <>
                <Route path={`/dashboard`}>
                  <Dashboard />
                </Route>
                <Route path={`/users`}>
                  <User />
                </Route>
        </>
    )
}

export default Routes
