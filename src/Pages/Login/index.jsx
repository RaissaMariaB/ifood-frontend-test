import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ImgCoverDesktop from '../../assets/images/woman-listening.jpg'
import ImgCoverMobile from '../../assets/images/mobile-login-background.jpg'
import { ReactComponent as LogoSpotify } from '../../assets/images/logo-spotify-login.svg'

import { getAuth } from '../../Service/Auth/users'

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
        ImgCoverDesktop
      }
      alt= { isMobile ?
        'Mulher branca, mais velha, com cabelos curtos e vermelhos, usando óculos de sol branco, ouvindo música com headphone também branco' :
        'Mulher negra, jovem, com cabelos curtos e preto, sorrindo e ouvindo música no seu headphone preto'
      }
      />
      <div className='login__container'>
        <div className='login__content'>
        <LogoSpotify aria-label='Logo do Spotify verde' className='login__logo-spotify'/>
        <h2 className='login__text'>
          Não toca a música toda<br/> mas toca seu coração
          <span role='img' className='login__heart' aria-label='Coração'>❤️</span>
        </h2>
        <Link to='/home'>
          <button aria-roledescription='realiza seu login com spotify' className='login__button' onClick={getAuth}>
            Entrar com Spotify
          </button>
        </Link>
        </div>
      </div>
    </main>
  )
}

export default Login
