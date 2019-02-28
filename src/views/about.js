import React from 'react';
import Header from './shared/header';

// CSS
import '../css/about.css'

// Media
import picOfMe from '../images/picofme.jpg'

export default function About() {
  return (
    <div className='about-me'>
      <Header/>
      <div className='about-pic'>
        <h2>Derek Rodriguez</h2>
        <img src={ picOfMe } alt='my-pic'/>
      </div>
      <div className='about-container'>
        <p>Computer Science enthusiast</p>
        <p>Currently: Application Developer II at Elm Resources</p>
        <p>Responsibilities:</p>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
