import React, { useState, useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import ImgCoverDesktop from '../../assets/images/woman-listening.jpg'
import ImgCoverMobile from '../../assets/images/mobile-login-background.jpg'
import { ReactComponent as LogoSpotify } from '../../assets/images/logo-spotify-login.svg'

import { getAuth } from '../../Service/Auth/users'
import { loginError, loginSucess } from '../../Service/Store/modules/login/actions'

import Button from '../../Components/Button'

import './style.scss'

// dispatch({ type: FETCH_STUDENT, token: response.data.access_token });

const Login = () => {
  const [ isMobile, setIsMobile ] = useState(false)

  const dispatch = useDispatch()

  const signIn = () =>{
      getAuth().then((token) => {
      dispatch(loginSucess('@auth/LOGIN_SUCESS', token))

    }).catch((error) => {
      dispatch(loginError('@auth/LOGIN_ERROR', error))

    })
  }

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
          <Link to="/home">
              <Button
              roleDescription='realiza seu login com spotify'
              onClick={() => signIn}
              children='Entrar no Spotify'
              />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Login
