
import React from 'react'
import crist from '../assets/crist.jpg'
import '../../src/App.css'

const LoginImage = ()=>{
    return(
        <div class="gfg">
        <img className="img-fluid w-100 " src={crist}/>
            <h1 class="first-txt" >
                Hello:)
            </h1>
        </div>
    )
}
export default LoginImage