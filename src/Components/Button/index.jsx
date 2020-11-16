import React from 'react'

import './Button.scss'

const Button = ({ onClick, roleDescription, children }) => {
  return (
    <button aria-roledescription={roleDescription} className='login__button' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

