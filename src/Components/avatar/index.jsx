import React from 'react'

import './avatar.scss'

const Avatar = ({ source, altDescription }) => {
  return(
    <figure className='avatar__container'>
      <img src={source} alt={altDescription} className='avatar__img'/>
    </figure>
  )
}

export default Avatar
