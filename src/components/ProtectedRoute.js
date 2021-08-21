import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
    const loggedIn = useSelector(store => store?.loggedIn)
    return ( 
    <Route> 
        {() =>
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        } 
    </Route>
    )
}
export default ProtectedRoute;