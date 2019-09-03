import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, info }) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label> Email:</label>
        <input
          type='email'
          name='email'
          placeholder='Please enter your Email.'
          onChange={handleChange}
        />
        <label> Password:</label>
        <input
          type='password'
          name='password'
          placeholder='Please enter your Password.'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
