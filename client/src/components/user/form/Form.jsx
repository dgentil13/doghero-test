import React, { Fragment } from 'react';

const Modal = ({ handleSubmit, handleChange, userInfo }) => {
  console.log(userInfo);
  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Name:</label>
        <input
          type='text'
          name='fullName'
          value={userInfo.fullName}
          placeholder='Name'
          onChange={handleChange}
        />
        <br />
        <label>Address:</label>
        <input
          type='text'
          name='address'
          value={userInfo.address}
          placeholder='Address'
          onChange={handleChange}
        />
        <br />
        <label>Number:</label>
        <input
          type='text'
          name='number'
          value={userInfo.number}
          placeholder='Number'
          onChange={handleChange}
        />
        <br />

        <button type='submit'>Edit Profile</button>
      </form>
    </Fragment>
  );
};

export default Modal;
