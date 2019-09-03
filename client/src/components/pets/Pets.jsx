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
  }, []);

  // Get Dog List
  const getDogs = () => {
    axios
      .get(`http://localhost:8000/api/dogs`, {
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
      .delete(`http://localhost:8000/api/del-pet/${petId}`, {
        withCredentials: true,
      })
      .then(() => {
        getDogs();
      })
      .catch(err => console.log(err));
  };

  // Displays Modal for Pet Creation
  const handleModal = () => {
    setModal(true);
  };

  // Handler form submit
  const submitHandler = e => {
    e.preventDefault();
    const { name, gender, race, age, size, additionalInfo } = dogs;
    axios
      .post(
        `http://localhost:8000/api/add-pet`,
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
      <section>
        {dogList.map((dog, idx) => {
          return <Card key={idx} dogInfo={dog} delPet={delPets} />;
        })}
        <div>
          <button onClick={handleModal}>Add Pet</button>
        </div>
        {modal ? (
          <Modal
            handleSubmit={submitHandler}
            handleChange={changeHandler}
            dogInfo={dogs}
          />
        ) : null}
      </section>
    </Fragment>
  );
};

export default Pets;
