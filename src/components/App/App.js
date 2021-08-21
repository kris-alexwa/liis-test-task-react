import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Auth from '../Auth/Auth'
import FlightSearchPage from '../FlightSearchPage/FlightSearchPage';
import ProtectedRoute from "../ProtectedRoute";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../redux/actions'

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  const loggedIn = useSelector(store => store?.loggedIn) ?? false

  React.useEffect(() => {
    dispatch(actions.init())
  }, [dispatch])

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/flight-search')
    }
  }, [loggedIn, history])

  return (
    <div className='body'>
      <div className='page'>
        <Switch>
          <Route exact path=''>
            <Auth />
          </Route>
          <ProtectedRoute path='/flight-search' component={FlightSearchPage}></ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
