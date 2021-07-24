import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { addLogin } from '../actions/signUpActions';
import Facebook from './Facebook';
import LoginImage from './LoginImage';
import {Link} from 'react-router-dom'

export const Login = (props) => {
    const {handleAuth} = props
    const dispatch = useDispatch()

    const userAuth = useSelector((state)=>state.userAuth.register)
    //console.log('rr',userAuth.email)

  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        dispatch(addLogin(values))
        //checking email
        if(userAuth.email != values.email){
            alert('missmatch')
            return false
        }else{
            handleAuth(true)
            props.history.push("/dashboard")
        }
        }}>

      {formik => (
        
        <div class="wrapper">
            <div><LoginImage/></div>

            <div>
            <h1 className="my-4 font-weight-bold text-center"style={{color:'blue'}} >Login</h1>
            <p className="text-center text-muted ">Don't?have an account?<Link to="/signup"><b>Sign up</b></Link></p>
            <Form>
            <button className="btn  w-100"><Facebook/></button>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-success mt-3 w-100" type="submit">join our community</button>
            <p className="text-center text-muted pa" >By joining,you agree to the <b>Terms</b> and <b>Privacy Policy</b></p>
    </Form>
            </div>
        </div>
      )}
    </Formik>
  )
}
export default Login