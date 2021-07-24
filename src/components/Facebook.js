import React,{useState} from 'react'
import FacebookLogin from 'react-facebook-login '

const Facebook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')

    let fbContent;
    if(isLoggedIn){

    }else{
        fbContent = (<FacebookLogin
            appId="5840827929292349"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} 
        />

        )
    }

  return (
      
    <div>
      
    </div>
  )
}

export default Facebook
