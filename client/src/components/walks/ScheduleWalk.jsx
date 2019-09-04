import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import Form from './form/Form';

const ScheduleWalk = () => {
  const [activeWalk, setActiveWalk] = useState(true);
  const [dogList, setDogList] = useState([]);
  const [walks, setWalks] = useState({
    duration: '',
    address: '',
    days: '',
    time: '',
  });

  useEffect(() => {
    getDogs();
  }, [activeWalk]);

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

  // Edit Dog
  const editActive = petId => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/active/${petId}`,
        { activeWalk },
        {
          withCredentials: true,
        },
      )
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
    getDogs();
  };

  // Change Active Walk status
  const activeHandler = (e, petId) => {
    e.preventDefault();
    setActiveWalk(!activeWalk);
    editActive(petId);
  };

  // Handler form submit
  const submitHandler = e => {
    e.preventDefault();
    const { duration, days, time, address } = walks;
    const dogs = dogList.filter(dog => {
      return dog.activeWalk === true;
    });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/create-walk`,
        { duration, days, time, address, dogs },
        {
          withCredentials: true,
        },
      )
      .then(() => {
        setWalks({
          duration: '',
          address: '',
          days: '',
          time: '',
        });
      })
      .catch(err => {
        console.log(err);
      });
    getDogs();
  };

  // Handles input change
  const changeHandler = e => {
    const { name, value } = e.target;
    setWalks({
      ...walks,
      [name]: value,
    });
  };
  return (
    <Fragment>
      <section className='walks'>
        <div className='main-walk'>
          <h1> Let's take a walk!</h1>
          <Form
            dogs={dogList}
            walks={walks}
            activeHandler={activeHandler}
            handleSubmit={submitHandler}
            handleChange={changeHandler}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default ScheduleWalk;
