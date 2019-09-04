import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Form from './form/Form';

const Profile = ({ getUser }) => {
  const [user, setUser] = useState({
    fullName: '',
    address: '',
    number: '',
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  // Gets Users Data
  const getUserInfo = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user`, {
        withCredentials: true,
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  };

  // handles form edition submit
  const submitHandler = e => {
    e.preventDefault();
    const { fullName, address, number } = user;
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/user-edit`,
        { fullName, address, number },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        getUserInfo();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Handles input changes
  const changeHandler = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <section className='profile'>
        <div>
          <h1> My Profile</h1>
          <Form
            handleSubmit={submitHandler}
            handleChange={changeHandler}
            userInfo={user}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
