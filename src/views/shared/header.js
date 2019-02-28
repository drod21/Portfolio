import React from 'react'
import { Link } from 'react-router-dom'

// Material UI imports
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/Toolbar'

// CSS
import '../../css/header.css'

export default function Header(props) {
  const links = [
    { route: '/', title: 'Home' },
    { route: '/about', title: 'About' },
    { route: '/contact', title: 'Contact' },
    { route: '/portfolio', title: 'Portfolio' }
  ]

  return (
    <div className='header-container'>
      <AppBar postition='static'>
        <ToolBar>
          {links.map((link) => {
            return <Button className='header-link' color='inherit' component={Link} to={link.route}>{link.title}</Button>
          })}
        </ToolBar>
      </AppBar>
    </div>
  );
}
