import React, { Component } from 'react';
import Header from './shared/header';
import codePic from '../images/codePic.jpeg'

// CSS
import '../css/home.css'
class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Header/>
        <div className='home-container' style={{ 'backgroundImage': `url(${codePic})` }}>
          <h3>Derek Rodriguez</h3>
          <h3>Software Developer</h3>
          <p>Highly motivated and passionate software developer.</p>
        </div>
      </div>
    );
  }
}

export default Home;