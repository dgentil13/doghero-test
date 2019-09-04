import React, { useState, Fragment } from 'react';
import AuthService from '../service/auth-service';

//components
import Form from './form/Form';

const Login = ({ getUser }) => {
  const service = new AuthService();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  // const [redirect, setRedirect] = useState(false);

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
        getUser(res);
        //redirect: true?
        //callback redirect?
      })
      .catch(err => {
        setError(true);
      });
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <section className='auth'>
      <div className='form-auth'>
        <Form handleChange={changeHandler} handleSubmit={submitHandler} />
      </div>
    </section>
  );
};

export default Login;
