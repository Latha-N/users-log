import React,{useState} from 'react'
import FacebookLogin from 'react-facebook-login'

const Facebook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userId, setUserId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [picture, setPicture] = useState('')

    const componentClicked = () =>console.log('clicked')

    const responseFacebook = (response) =>{
        //console.log(response)
        setIsLoggedIn(true)
        setUserId(response.userId)
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture.data.url)
    }

    let fbContent;
    
    if(isLoggedIn){
        fbContent=(
            <div style={{
                width: '600px',
                margin: 'auto',
                background:'#f4f4f4',
                padding:'20px'
            }}>
                <img style={{borderRadius:50}} src={picture} alt={name}/>
                <h5>{email}</h5>
            </div>
        )
    }else{
        fbContent = (<FacebookLogin
            appId="5840827929292349"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}/>

        )
    }

  return (
      
    <div>
      {fbContent}
      {/* <img style={{borderRadius:50}} src={picture} alt={name}/>
      <h1>{email}</h1> */}
    </div>
  )
}

export default Facebook
