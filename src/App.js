import React from 'react';
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

const App = () =>{

  return (
    <BrowserRouter>
      <Switch>
        <Route exact= {true} path='/' component={Login}></Route>
        <Route exact= {true} path='/home' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
