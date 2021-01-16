import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'

import './App.scss'

const App = () =>{

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path='/' component={Login}></Route>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
