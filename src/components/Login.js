import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useDispatch,useSelector} from 'react-redux';
import { addLogin } from '../actions/signUpActions';
import Facebook from './Facebook';

export const Login = (props) => {

    const dispatch = useDispatch()

    // const userAuth = useSelector((state)=>state.userAuth.register)
    // if(userAuth.email != email)


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
        console.log(values)
      }}
    >
      {formik => (
        
        <div>
          <h1 className="my-4 font-weight-bold text-center"style={{color:'blue'}} >Login</h1>
          <p className="text-center text-muted">Don't?have an account?<b>Sign up</b></p>

          <Form>
              <button className="btn  w-100"><Facebook/></button>
            
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-success mt-3 w-100" type="submit">join our community</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
export default Login