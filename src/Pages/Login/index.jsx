import React, { useState, useEffect } from 'react'

import ImgCoverDesktop from '../../assets/images/woman-listening.jpg'
import ImgCoverMobile from '../../assets/images/mobile-login-background.jpg'
import { ReactComponent as LogoSpotify } from '../../assets/images/logo-spotify-login.svg'

import './style.scss'

const Login = () => {
  const [ isMobile, setIsMobile ] = useState(false)

  const resizeScreen = (event) => {
    const  screenWidth  = event.target.innerWidth

    if(screenWidth <= 768 ){
      setIsMobile(true)
      return
    }
    setIsMobile(false)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeScreen )

  }, [])

  return(
    <main className='login'>
      <img
      className='login__img'
      src= { isMobile ?
        ImgCoverMobile :
        ImgCoverDesktop  }
      alt= { isMobile ?
        'Older lady lintening a song with your headphone' :
        'Black girl smiling listening a song with your headphone' }
      />
      <div className='login__container'>
        <div className='login__content'>
        <LogoSpotify aria-label='Green Spotify logo' className='login__logo-spotify'/>
        <h2 className='login__text'>
          Não toca a música toda<br/> mas toca seu coração
          <span role='img' className='login__heart' aria-label='Coração'>❤️</span>
        </h2>
        <button aria-roledescription='realiza seu login com spotify' className='login__button'>
          Entrar com Spotify
        </button>
        </div>
      </div>
    </main>

  )

}

export default Login
