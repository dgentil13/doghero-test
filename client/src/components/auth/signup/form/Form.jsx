import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, role }) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <input
          type='text'
          name='fullName'
          placeholder='Please enter your Name.'
          onChange={handleChange}
        />
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
        <label> Number:</label>
        <input
          type='text'
          name='number'
          placeholder='Please enter your Number.'
          onChange={handleChange}
        />

        {role === 'Walker' ? (
          <div>
            <label> Address:</label>
            <input
              type='text'
              name='address'
              placeholder='Please enter your Address.'
              onChange={handleChange}
            />
          </div>
        ) : null}

        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
