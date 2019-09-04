import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Modal from './add-pet/Modal';
import Card from './pet-info/Card';

const Pets = ({ getUser }) => {
  const [dogs, setDogs] = useState({
    name: '',
    gender: '',
    race: '',
    age: '',
    size: '',
    additionalInfo: '',
  });
  const [modal, setModal] = useState(false);
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    getDogs();
  }, [modal]);

  // Get Dog List
  const getDogs = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/dogs`, {
        withCredentials: true,
      })
      .then(res => {
        setDogList(res.data);
      })
      .catch(err => console.log(err));
  };

  // Delete Pet
  const delPets = petId => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/del-pet/${petId}`, {
        withCredentials: true,
      })
      .then(() => {
        getDogs();
      })
      .catch(err => console.log(err));
  };

  // Displays Modal for Pet Creation
  const handleModal = () => {
    setModal(!modal);
  };

  // Handler form submit
  const submitHandler = e => {
    e.preventDefault();
    const { name, gender, race, age, size, additionalInfo } = dogs;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/add-pet`,
        { name, gender, race, age, size, additionalInfo },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        setDogs({
          name: '',
          gender: '',
          race: '',
          age: '',
          size: '',
          additionalInfo: '',
        });
      })
      .catch(err => {
        setDogs({
          name: '',
          gender: '',
          race: '',
          age: '',
          size: '',
          additionalInfo: '',
        });
      });
    getDogs();
    handleModal();
  };

  // Handles input change
  const changeHandler = e => {
    const { name, value } = e.target;
    setDogs({
      ...dogs,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <section className='pets'>
        {modal ? (
          <Modal
            handleModal={handleModal}
            handleSubmit={submitHandler}
            handleChange={changeHandler}
            dogInfo={dogs}
          />
        ) : null}
        <div className='main-content'>
          <div className='header-pets'>
            <h1> My Pets</h1>
            <button onClick={handleModal}>
              <img src='/images/plus-solid.svg' alt='Add' />
            </button>
          </div>
          {dogList === null || dogList === undefined ? (
            <p> Loading ... </p>
          ) : dogList.length > 0 ? (
            <div className='card-box'>
              {dogList.map((dog, idx) => {
                return <Card key={idx} dogInfo={dog} delPet={delPets} />;
              })}
            </div>
          ) : (
            <p className='no-dog'>You have no Pets yet! </p>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Pets;
