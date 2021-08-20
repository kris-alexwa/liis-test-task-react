import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Auth from '../Auth/Auth'
import FlightSearchPage from '../FlightSearchPage/FlightSearchPage';
import ProtectedRoute from "../ProtectedRoute"; 

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const history = useHistory()

  React.useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      handleLogin()
      history.push('/flight-search')
    } else {
      handleLogOut()
    }
  }, [])

  function handleLogin() {
    localStorage.setItem('loggedIn', 'true')
    setLoggedIn(true)
  }

  function handleLogOut() {
    localStorage.removeItem('loggedIn')
    setLoggedIn(false)
  }

  return (
    <div className='body'>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Auth handleLogin={handleLogin} />
          </Route>
          <ProtectedRoute path='/flight-search' component={FlightSearchPage} loggedIn={loggedIn} handleLogOut={handleLogOut}></ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
