import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Modal = ({ handleSubmit, handleChange, dogInfo }) => {
  console.log(dogInfo)
  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Pet Name:</label>
        <input
          type='text'
          name='name'
          value={dogInfo.name}
          placeholder='Name'
          onChange={handleChange}
        />
        <br />
        <label>Race:</label>
        <input
          type='text'
          name='race'
          value={dogInfo.race}

          placeholder='Race'
          onChange={handleChange}
        />
        <br />
        <label>Age:</label>
        <input
          type='text'
          name='age'
          value={dogInfo.age}

          placeholder='Age'
          onChange={handleChange}
        />
        <br />
        <label>Size</label>
        <input
          type='text'
          name='size'
          value={dogInfo.size}

          placeholder='Size'
          onChange={handleChange}
        />
        <br />
        <label>Additional Information:</label>
        <input
          type='text'
          name='additionalInfo'
          placeholder='Important information'
          value={dogInfo.additionalInfo}

          onChange={handleChange}
        />
        <br />
        <label>Gender:</label>
        {/* make a component? */}
        <input
          type='text'
          name='gender'
          value={dogInfo.gender}

          placeholder='Gender'
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Modal;
