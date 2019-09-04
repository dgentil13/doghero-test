import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ userIsLogged }) => {
  return (
    <Fragment>
      <header className='front-header'>
        <div className='main'>
          <p>We walk while you work!</p>
          {userIsLogged ? (
            <button>
              <Link
                to={{
                  pathname: '/walks',
                }}
              >
                Let's Walk!
              </Link>
            </button>
          ) : (
            <button>
              <Link
                to={{
                  pathname: '/signup',
                }}
              >
                Try it out!
              </Link>
            </button>
          )}
        </div>
      </header>
      <section className='about'>
        <div>
          <img src='/images/paw.png' alt='Paw' />
          <p>Take care of your four legged friend!</p>
        </div>
        <div>
          <img src='/images/bone.png' alt='Bone' />
          <p>Helps your dog to socialize! </p>
        </div>
        <div>
          <img src='/images/colar.png' alt='Colar' />
          <p>Trusted walkers to exercise your dog!</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
