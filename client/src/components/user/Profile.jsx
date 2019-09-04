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

  const getUserInfo = () => {
    axios
      .get(`http://localhost:8000/api/user`, {
        withCredentials: true,
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  };

  const submitHandler = e => {
    e.preventDefault();
    const { fullName, address, number } = user;
    axios
      .put(
        `http://localhost:8000/api/user-edit`,
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
