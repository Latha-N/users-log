import './App.css'
import React, { useState } from 'react'
import Signup from './components/SignUp'
import Image1 from './components/image-register'
import Image2 from './components/image20login'
import Login from './components/Login'

const App = (props) => {
const [toggle, setToggle] = useState(false)

const handleAuth = (value) =>{
  setToggle(true)
}
  return (
    <div >
      {toggle ? (
        <div class="wrapper">
                <div><Image1/></div>
                <div><Login/></div>
        </div>
      ):(
        <div class="wrapper">
        <div><Image2/></div>
        <div ><Signup handleAuth={handleAuth}/></div>
        </div>
      )}

      
    </div>
    
    
    // <div className="container mt-3">
    //   {toggle ? (
    //     <div className="row">
    //     <div className="col-md-7">
    //     <Image2/>
    //     </div>
    //     <div className="col-md-5">
    //     <Login/>
    //   </div>
    //   </div>

    //   ): (
    //     <div className="row">
    //     <div className="col-md-7">
    //     <Image1/>
    //     </div>
    //     <div className="col-md-5">
    //     <Signup handleAuth={handleAuth}/>
    //   </div>
    //   </div>
    //   )}


            
    //   </div>
  

  )
}

export default App
