import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
