import React, { Fragment } from 'react';

const Form = ({ handleChange, handleSubmit, activeHandler, dogs, walks }) => {
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='address'
          value={walks.address}
          placeholder='Please enter your address.'
          onChange={handleChange}
        />
        <h4> Who's going on the walk?</h4>
        <div className='box-walk'>
          {dogs.length > 0 ? (
            dogs.map((dog, idx) => {
              return (
                <div key={idx} className='card-walk'>
                  {dog.name}
                  <button
                    className='active-pet'
                    onClick={e => activeHandler(e, dog._id)}
                  >
                    {dog.activeWalk ? (
                      <img src='/images/leash.svg' alt='Leash full' />
                    ) : (
                      <img src='/images/leash-empty.svg' alt='Leash empty' />
                    )}
                  </button>
                </div>
              );
            })
          ) : (
            <p className='no-dog'> Add a Pet in you Pets page!</p>
          )}
        </div>

        <select name='duration' onChange={handleChange}>
          <option>Duration</option>
          <option value='30 min.'>30 min.</option>
          <option value='1 hour'>1 hour</option>
        </select>

        <select name='days' onChange={handleChange}>
          <option>Day of the Week</option>
          <option value='Monday'>Monday</option>
          <option value='Tuesday'>Tuesday</option>
          <option value='Wednesday'>Wednesday</option>
          <option value='Thrusday'>Thrusday</option>
          <option value='Friday'>Friday</option>
          <option value='Saturday'>Saturday</option>
          <option value='Sunday'>Sunday</option>
        </select>

        <input
          type='text'
          name='time'
          value={walks.time}
          placeholder='Please enter the time. ex: 10am'
          onChange={handleChange}
        />

        <button type='submit'>Walk!</button>
      </form>
    </Fragment>
  );
};

export default Form;
