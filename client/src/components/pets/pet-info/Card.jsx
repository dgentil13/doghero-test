import React, { useEffect, useState, Fragment } from 'react';

const Card = ({ dogInfo, delPet }) => {
  return (
    <Fragment>
      <section className='card'>
        <p>{dogInfo.name}</p>
        <button onClick={petId => delPet(dogInfo._id)}> Del </button>
      </section>
    </Fragment>
  );
};

export default Card;
