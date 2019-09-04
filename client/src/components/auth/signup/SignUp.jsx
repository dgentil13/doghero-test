import React, { useState } from 'react';
import AuthService from '../service/auth-service';
import { Redirect } from 'react-router-dom';

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
  const [redirect, setRedirect] = useState(false);

  //Handle Submit from Signup
  const submitHandler = e => {
    e.preventDefault();
    const { email, password, number, fullName, address } = inputs;
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

        setRedirect(true);
        props.getUser(res);
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
