import './App.css'
import React, { useState } from 'react'
import Signup from './components/SignUp'
import Login from './components/Login'
import {Link, Route} from 'react-router-dom'
import Dashboard from './components/DashBoard'


const App = (props) => {

return (
  <div>

    <Link to="/signup"></Link> 
    <Link to="/login"></Link>
    <Link to="/dashboard"></Link>
    
    <Route path="/signup" render={(props)=>{
      return <Signup
      {...props}
      />
    }}/>

    <Route path="/login" render={(props)=>{
      return <Login
      {...props}
      />
    }}/>

    <Route path="/dashboard" component={Dashboard}/>

  </div>
  )
}
export default App
