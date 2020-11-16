import React from 'react'
// import { Container } from 'react-grid-system';

import Topbar from "../../Containers/Topbar";

import './home.scss';

const Home = () => {

  return(
    <main className='home'>
      {/* <Container > */}
        <header className='home__header'>
          <Topbar />
        </header>
    {/* </Container> */}
      </main>
  )
}

export default Home
