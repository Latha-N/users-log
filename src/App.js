import './App.css'
import React from 'react'
import Signup from './components/SignUp'
import Image1 from './components/image-register'
import Image2 from './components/image20login'
import Login from './components/Login'

const App = (props) => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-7">
        <Image1/>
        </div>
        <div className="col-md-5">
        <Signup/>
      </div>
      </div>

      <div className="row">
        <div className="col-md-7">
        <Image2/>
        </div>
        <div className="col-md-5">
        <Login/>
      </div>
      
      </div>
  </div>

  )
}

export default App
