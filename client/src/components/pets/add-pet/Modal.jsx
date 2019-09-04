import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Modal = ({ handleSubmit, handleChange, handleModal, dogInfo }) => {
  console.log(dogInfo);
  return (
    <Fragment>
      <form className='modal' onSubmit={e => handleSubmit(e)}>
        <button className='close' onClick={handleModal}>
          <img src='/images/times-solid.svg' />
        </button>
        <input
          type='text'
          name='name'
          value={dogInfo.name}
          placeholder='Name'
          onChange={handleChange}
        />
        <br />
        <input
          type='text'
          name='race'
          value={dogInfo.race}
          placeholder='Race'
          onChange={handleChange}
        />
        <br />
        {/* make a component? */}
        <select name='gender' onChange={handleChange}>
          <option>Gender</option>
          <option value='Female'>Female</option>
          <option value='Male'>Male</option>
        </select>
        <br />

        <input
          type='text'
          name='age'
          value={dogInfo.age}
          placeholder='Age'
          onChange={handleChange}
        />
        <br />
        <input
          type='text'
          name='size'
          value={dogInfo.size}
          placeholder='Size, ex: Small'
          onChange={handleChange}
        />
        <br />
        <label>Additional Information:</label>
        <textarea
          type='text'
          name='additionalInfo'
          placeholder='Important information'
          value={dogInfo.additionalInfo}
          onChange={handleChange}
        />
        <br />

        <button type='submit'>Add Pet</button>
      </form>
    </Fragment>
  );
};

export default Modal;
