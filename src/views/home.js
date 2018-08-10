import React, { Component } from 'react';
import Header from './shared/header';

// CSS
import '../css/home.css'
class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <Header/>
        <p>here</p>
      </div>
    );
  }
}

export default Home;