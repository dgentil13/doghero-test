import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Card = ({ dogInfo, delPet }) => {
  console.log(dogInfo);
  return (
    <Fragment>
      <section>
        <p>{dogInfo.name}</p>
        <button onClick={petId => delPet(dogInfo._id)}> Del </button>
      </section>
    </Fragment>
  );
};

export default Card;
