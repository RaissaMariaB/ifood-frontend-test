import React from 'react'
// import { Row } from 'react-grid-system'

import Avatar from '../../Components/avatar'
import ProfilePicture from '../../assets/images/anti-profile.jpg'

import './user.scss'

const User = () => {

  return(
    <div style={{ alignItems: "center" }} >
      <p className='user__name'>
        'Beaultiful person'
      </p>
      <Avatar
      source={ProfilePicture}
      altDescription='Face of a smalling person with a gold crow drawning with a pen'
      />
    </div>
  )
}

export default User
