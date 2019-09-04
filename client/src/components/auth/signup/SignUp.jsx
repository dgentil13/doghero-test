import React, { useState, Fragment } from 'react';
import AuthService from '../service/auth-service';
import { Link, Redirect } from 'react-router-dom';

//components
import Form from './form/Form';

const SignUp = props => {
  const service = new AuthService();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    number: '',
    fullName: '',
    address: '',
  });
  const [error, setError] = useState(false);
  // const [redirect, setRedirect] = useState(false);

  const submitHandler = e => {
    e.preventDefault();
    const { email, password, number, fullName, address } = inputs;
    console.log('role:', props);
    const role = props.state;
    service
      .signup(email, password, number, fullName, address, role)
      .then(res => {
        setInputs({
          email: '',
          password: '',
          number: '',
          fullName: '',
          address: '',
        });
        props.getUser(res);
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
        <Form
          handleChange={changeHandler}
          handleSubmit={submitHandler}
          role={props.state}
        />
      </div>
    </section>
  );
};

export default SignUp;
