import './App.css'
import React, { useState } from 'react'
import Signup from './components/SignUp'
import Login from './components/Login'
import {Link, Route} from 'react-router-dom'
import Dashboard from './components/DashBoard'
import {removeUser} from './actions/signUpActions'


const App = (props) => {
  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  
  // const handleAuth = (value) =>{
  //   setUserLoggedIn(false)
  // }
return (
  <div>
      <Link to="/dashboard"></Link>
      <Link to="/signup">signup</Link>||
      <Link to="/login">login</Link>
  
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
