import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addRegister } from '../actions/signUpActions';
import { jsonSchema, uuid } from 'uuidv4';


export const Signup = (props) => {

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
          id:uuid(),
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
          dispatch(addRegister(values))
          const register = JSON.stringify(values)
          localStorage.setItem('register',register)

          console.log(values)
      }}
    >
      {formik => (
        
        <div>
          <h1 className="my-4 font-weight-bold text-center"style={{color:'blue'}} >Sign up</h1>
          <p className="text-center text-muted">Already have an account?<b>Login</b></p>

          <Form>
              <button className="btn btn-primary w-100">join via facebook</button>
              <div class>

              </div>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-success mt-3 w-100" type="submit">join our community</button>
            <p>By joining,you agree to the <b>Terms</b> and <b>Privacy Policy</b></p>

          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Signup