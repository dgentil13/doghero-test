import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/service/auth-service';

// components
import SignUp from './components/auth/signup/SignUp';
import Login from './components/auth/login/Login';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

const App = () => {
  const service = new AuthService();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    if (loggedInUser === null) {
      service
        .loggedin()
        .then(res => {
          setLoggedInUser(null);
        })
        .catch(err => {
          setLoggedInUser(false);
        });
    }
  }, [loggedInUser]);

  const getTheUser = userObj => {
    setLoggedInUser(userObj);
  };

  const handleRole = role => {
    setRole(role);
  };
  console.log('log', loggedInUser);

  if (loggedInUser) {
    return (
      <div className='App'>
        <Navbar
          getUser={getTheUser}
          state={role}
          handleRole={handleRole}
          userIsLogged={loggedInUser}
        />
        <Switch>
          <Route exact path='/' render={() => <Home getUser={getTheUser} />} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className='App'>
        <Navbar
          getUser={getTheUser}
          state={role}
          handleRole={handleRole}
          userIsLogged={loggedInUser}
        />
        <Switch>
          <Route
            exact
            path='/signup'
            render={() => <SignUp getUser={getTheUser} state={role} />}
          />
          <Route
            exact
            path='/login'
            render={() => <Login getUser={getTheUser} />}
          />
          <Route exact path='/' render={() => <Home getUser={getTheUser} />} />
        </Switch>
      </div>
    );
  }
};

export default App;
