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
    console.log('entrou');
    e.preventDefault();
    const { email, password } = inputs;
    console.log(inputs);

    service
      .login(email, password)
      .then(res => {
        console.log('deu');
        setInputs({
          email: '',
          password: '',
        });
        getUser(res);
        //redirect: true?
        //callback redirect?
      })
      .catch(err => {
        console.log('nao deu');
        setError(true);
      });
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    console.log(value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Form
      handleChange={changeHandler}
      handleSubmit={submitHandler}
      info={inputs}
    />
  );
};

export default Login;
