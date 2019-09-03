import { Link } from 'react-router-dom';
import React from 'react';

import AuthService from '../auth/service/auth-service';

const Navbar = ({ userIsLogged, handleRole, getUser }) => {
  const service = new AuthService();

  const logoutUser = () => {
    service.logout().then(() => {
      getUser(null);
    });
  };

  console.log('nav', userIsLogged);
  if (userIsLogged) {
    return (
      <nav>
        <div className='logo'>
          <h4>
            <Link
              to={{
                pathname: '/',
              }}
              onClick={role => handleRole('Walker')}
            >
              PupLove
            </Link>
          </h4>
        </div>
        <ul>
          <li>Schedule Walk</li>
          <li>Profile</li>
          <li>Add Pet</li>
          <li>
            <Link to='/' onClick={logoutUser}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <div className='logo'>
          <h4>
            <Link
              to={{
                pathname: '/',
              }}
              onClick={role => handleRole('Walker')}
            >
              PupLove
            </Link>
          </h4>
        </div>
        <ul>
          <li>
            <Link
              to={{
                pathname: '/signup',
              }}
              onClick={role => handleRole('Walker')}
            >
              Be a Walker!
            </Link>
          </li>
          <Link
            to={{
              pathname: '/signup',
            }}
            onClick={role => handleRole('Client')}
          >
            SignUp
          </Link>
          <li>
            <Link
              to={{
                pathname: '/login',
              }}
            >
              LogIn
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
