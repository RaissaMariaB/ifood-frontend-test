import React from 'react'
// import { Container, Row } from 'react-grid-system'

import User from '../User'
import { ReactComponent as LogoSpotify } from '../../assets/images/logo-spotify-login.svg'

import  './topbar.scss';

const Topbar = () => {

  return(
      <>
        <a href="/" >
          <LogoSpotify aria-label='Green Spotify logo' className='home__logo-spotify' />
        </a>
        <User />
      </>
  )
}

export default Topbar;
