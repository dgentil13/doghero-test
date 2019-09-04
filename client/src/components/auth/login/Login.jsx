import React, { useState } from 'react';
import AuthService from '../service/auth-service';
import { Redirect } from 'react-router-dom';

//components
import Form from './form/Form';

const Login = ({ getUser }) => {
  const service = new AuthService();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [redirect, setRedirect] = useState(false);

  //Handle Submit from Signup
  const submitHandler = e => {
    e.preventDefault();
    const { email, password } = inputs;

    service
      .login(email, password)
      .then(res => {
        setInputs({
          email: '',
          password: '',
        });
        setRedirect(true);
        getUser(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Handle change of inputs
  const changeHandler = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //redirect Page after login
  if (redirect) {
    return <Redirect to='/'></Redirect>;
  }
  return (
    <section className='auth'>
      <div className='form-auth'>
        <Form handleChange={changeHandler} handleSubmit={submitHandler} />
      </div>
    </section>
  );
};

export default Login;
