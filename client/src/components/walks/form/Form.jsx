import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, activeHandler, dogs, walks }) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label> address:</label>
        <input
          type='text'
          name='address'
          value={walks.address}
          placeholder='Please enter your address.'
          onChange={handleChange}
        />
        {dogs.map((dog, idx) => {
          return (
            <div ket={idx}>
              {dog.name}
              <button onClick={e => activeHandler(e, dog._id)}>
                {dog.activeWalk ? 'Active' : 'Not active'}
              </button>
            </div>
          );
        })}
        <label> Type:</label>
        <input
          type='text'
          name='type'
          value={walks.type}
          onChange={handleChange}
        />
        <label> Duration:</label>
        <input
          type='text'
          name='duration'
          value={walks.duration}
          placeholder='Please enter your Password.'
          onChange={handleChange}
        />
        <label> Days:</label>
        <input
          type='text'
          name='days'
          value={walks.days}
          placeholder='Please enter your Number.'
          onChange={handleChange}
        />
        <label> Time:</label>
        <input
          type='text'
          name='time'
          value={walks.time}
          placeholder='Please enter your Number.'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
