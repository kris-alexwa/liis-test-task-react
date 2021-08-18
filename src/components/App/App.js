import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from '../Auth/Auth'
import FlightSearchPage from '../FlightSearchPage/FlightSearchPage'

function App() {
  return (
    <div className='body'>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Auth />
          </Route>
          <Route path='/flight-search'>
            <FlightSearchPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
