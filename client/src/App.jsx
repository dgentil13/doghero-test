import React, { useState, useEffect } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import AuthService from './components/auth/service/auth-service';

// components
import SignUp from './components/auth/signup/SignUp';
import Login from './components/auth/login/Login';
import Home from './components/home/Home';
import Pets from './components/pets/Pets';
import Navbar from './components/navbar/Navbar';
import Profile from './components/user/Profile';
import ScheduleWalk from './components/walks/ScheduleWalk';
import Footer from './components/footer/Footer';

const App = () => {
  const service = new AuthService();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [role, setRole] = useState('');

  useEffect(() => {
    if (loggedInUser === null) {
      service
        .loggedin()
        .then(res => {
          setLoggedInUser(res);
        })
        .catch(err => {
          setLoggedInUser(false);
        });
    }
  }, []);

  const getTheUser = userObj => {
    setLoggedInUser(userObj);
  };

  const handleRole = role => {
    setRole(role);
  };

  //Routes for logged in user
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
          <Route
            exact
            path='/'
            render={() => <Home userIsLogged={loggedInUser} />}
          />
          <Route
            exact
            path='/pets'
            render={() => <Pets getUser={getTheUser} />}
          />
          <Route
            exact
            path='/profile'
            render={() => <Profile getUser={getTheUser} />}
          />
          <Route
            exact
            path='/walks'
            render={() => <ScheduleWalk getUser={getTheUser} />}
          />
        </Switch>

        <Footer />
      </div>
    );
  } else {
    //Routes for logged off user
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
        <Footer />
      </div>
    );
  }
};

export default App;
