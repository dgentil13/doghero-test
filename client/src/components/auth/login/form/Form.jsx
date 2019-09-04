import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, info }) => {
  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Please enter your Email.'
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Please enter your Password.'
          onChange={handleChange}
        />
        <button type='submit'>Enter</button>
      </form>
    </Fragment>
  );
};

export default Form;
