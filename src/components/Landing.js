import React from 'react';
import avatar from '../assets/avatar.jpg'; 

const Landing = () => {
  return (
    <section id="landing">
      <img src={avatar} alt="Garv Avatar" />
      <h1>Garv Mittal</h1>
      <p>Web Developer | CSE IoT Student | Passionate Learner</p>
    </section>
  );
};

export default Landing;
