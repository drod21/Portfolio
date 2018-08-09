import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Material UI imports
import Button from '@material-ui/core/Button';

// CSS
import '../../css/header.css'

class Header extends Component {

  render() {
    return (
      <div className='header-container'>
      <Button className='header-link' component={Link} to='/'>Home</Button>
      <Button className='header-link' component={Link} to='/about'>About</Button>
      <Button className='header-link' component={Link} to='/contact'>Contact</Button>
      <Button className='header-link' component={Link} to='/portfolio'>Portfolio</Button>
      </div>
    );
  }

}

export default Header;