import React from 'react';

import { ReactComponent as SpotifyLogo } from '../../assets/images/logo-spotify-login.svg'
import './styles.scss';

const Logo = ({ logoSpotifySize }) => ( <SpotifyLogo className={logoSpotifySize} data-testid="logo" /> )

export default Logo;
