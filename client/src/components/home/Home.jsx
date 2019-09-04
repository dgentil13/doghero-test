import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <header className='front-header'>
        <div className='main'>
          <p>We walk while you work!</p>
          <button>Try it Out</button>
        </div>
      </header>
      <section className='about'>
        <div>
          <img src='/images/paw.png' />
          <p>Take care of your four legged friend!</p>
        </div>
        <div>
          <img src='/images/bone.png' />
          <p>Helps your dog to socialize! </p>
        </div>
        <div>
          <img src='/images/colar.png' />
          <p>Trusted walkers to exercise your dog!</p>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
