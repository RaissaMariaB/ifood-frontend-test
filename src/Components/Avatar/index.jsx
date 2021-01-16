import React from 'react';

import AvatarPicture from '../../assets/images/anti-rihanna-profile.jpg'
import './styles.scss';

const Avatar = () => {
  return (
    <div className="avatar">
        <p className="avatar_text">
            Seja bem-vindo!
        </p>
        <img className="avatar_img" src={AvatarPicture} alt='Foto de perfil' />
    </div>
  )
}

export default Avatar;
