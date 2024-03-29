import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addRegister } from '../actions/signUpActions';
import { v4 as uuidv4 } from 'uuid';
import Facebook from '../components/Facebook'
import RegisterImage from './RegisterImage';
import {Link} from 'react-router-dom'


export const Signup = (props) => {
    const {handleAuth} = props
    const dispatch = useDispatch()

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
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
          id:uuidv4(),
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
          dispatch(addRegister(values))
        //   console.log('',values)
            const register = JSON.stringify(values)
            localStorage.setItem('register',register)
      }}
    >
      {formik => (
        
        <div class="wrapper">   
            <div><RegisterImage/></div>
        <div>
        <h1 className="my-4 font-weight-bold text-center"style={{color:'blue'}} >Sign up</h1>
        <p className="text-center text-muted">Already have an account?<Link to="/login">Login</Link></p>

          <Form>
            <button className="btn w-100"><Facebook/></button>

            <div class="wrapperin">
              <TextField label="First Name" name="firstName" type="text" />
              <TextField label="last Name" name="lastName" type="text" />
            </div> 
            
            <TextField label="Email address" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-success mt-3 w-100" type="submit" >join our community</button>
            <p className="text-center text-muted pa" >By joining,you agree to the <b>Terms</b> and <b>Privacy Policy</b></p>

          </Form>

        </div>
        </div>
      )}
    </Formik>
  )
}
export default Signup