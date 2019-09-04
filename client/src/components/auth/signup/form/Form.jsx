import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, role }) => {
  return (
    <Fragment>
      {role === 'Walker' ? <h1> Be a Walker!</h1> : <h1>Join Us!</h1>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='fullName'
          placeholder='Please enter your Name.'
          onChange={handleChange}
        />
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
        <input
          type='text'
          name='number'
          placeholder='Please enter your Number.'
          onChange={handleChange}
        />
        {role === 'Walker' ? (
          <input
            type='text'
            name='address'
            placeholder='Please enter your Address.'
            onChange={handleChange}
          />
        ) : null}
        <button type='submit'>Sign Up</button>
      </form>
    </Fragment>
  );
};

export default Form;
