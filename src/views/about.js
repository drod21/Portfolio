import React, { Component } from 'react';
import Header from './shared/header';

// CSS
import '../css/about.css'

// Media
import picOfMe from '../images/picofme.jpg'

class About extends Component {
  render() {
    return (
      <div className='about-me'>
        <Header/>
        <div className='about-pic'>
          <h2>Derek Rodriguez</h2>
          <img src={picOfMe} alt='my-pic'/>
        </div>
        <div className='about-container'>
          <p>Computer Science enthusiast</p>
          
        </div>
      </div>
    );
  }
}

export default About

