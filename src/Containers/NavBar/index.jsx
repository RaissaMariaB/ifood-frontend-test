import React from 'react'

import SpotifyLogo from '../../Components/Logo'
import Avatar from '../../Components/Avatar'
import Container from '../ContainerPages'
import './styles.scss'

const NavBar = () => {

  return (
    <nav className='nav__container'>
      <SpotifyLogo logoSpotifySize='logo-spotify__navbar' />
        <Avatar />
    </nav>
  )
}

export default NavBar;
