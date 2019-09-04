import React, { useEffect, useState, Fragment } from 'react';

const Card = ({ dogInfo, delPet }) => {
  return (
    <Fragment>
      <section className='card'>
        <div>
          <div className='dog-card'>
            {dogInfo.gender === 'Female' ? (
              <img src='/images/dog-female.png' />
            ) : (
              <img src='/images/dog-male.png' />
            )}
            <h3>{dogInfo.name}</h3>
          </div>
          <p>{dogInfo.age}</p>
          <p>{dogInfo.race}</p>
        </div>
        <button className='delete-pet' onClick={petId => delPet(dogInfo._id)}>
          <img src='/images/trash.svg' />
        </button>
      </section>
    </Fragment>
  );
};

export default Card;
