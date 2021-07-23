import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { makeStyles, Button, TextField, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
//import { startRegisterUser } from '../../actions/userAuthAction'
import { addNumber } from '../actions/signUpActions'

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '10%',
		marginLeft: '30%',
		display: 'flex',
		flexWrap: 'wrap',
		direction: 'column',
		minWidth: '100vh',
	},
	title: {
		marginLeft: '20%',
	},
	textField: {
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
		width: '50ch',
	},
	button: {
		marginLeft: theme.spacing(20),
		marginRight: theme.spacing(20),
		width: '30ch',
		marginTop: '1em',
	},
	register: {
		marginLeft: '26%',
		marginTop: '10px',
	},
	link: {
		textDecoration: 'none',
		color: 'blue',
	},
}))

const initialValues = {
	firstname: '',
    lastname:'',
	email: '',
	password: ''
}
const validationSchema = yup.object({
	firstname: yup
		.string('Enter your first name')
		.required('first name is required')
		.min(4, 'first rname must be minimum 4 characters long'),
    lastname: yup
        .string('Enter your last name')
        .required('last name is required')
        .min(1, 'last rname must be minimum 4 characters long'),
email: yup
		.string('Enter your email')
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string('Enter your password')
		.min(8, 'Password should be of minimum 8 characters length')
		.required('Password is required'),
	
})

const Register = (props) => {
	const dispatch = useDispatch()

	// const userAuth = useSelector((state) => {
	// 	return state.userAuth.register
	// })

	// const [isSubmitted, setIsSubmitted] = useState(false)

	// useEffect(() => {
	// 	if (isSubmitted) {
	// 		props.history.push('/login')
	// 	}
	// }, [userAuth])

	const classes = useStyles()

	const onSubmit = (values, onSubmitProps) => {
		console.log('values', values)
		onSubmitProps.resetForm()
		//setIsSubmitted(true)
		//dispatch(startRegisterUser(values))
	}

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: onSubmit,
	})

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant='h4' color='primary'>
				Sign up
			</Typography>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					className={classes.textField}
					margin='normal'
					id='firstname'
					name='firstname'
					label='First name'
					variant='outlined'
					value={formik.values.firstname}
					onChange={formik.handleChange}
					error={formik.touched.firstname && Boolean(formik.errors.firstname)}
					helperText={formik.touched.firstname && formik.errors.firstname}
				/>

                <TextField
					className={classes.textField}
					margin='normal'
					id='lastname'
					name='lastname'
					label='Last name'
					variant='outlined'
					value={formik.values.lastname}
					onChange={formik.handleChange}
					error={formik.touched.lastname && Boolean(formik.errors.lastname)}
					helperText={formik.touched.lastname && formik.errors.lastname}
				/>


				<TextField
					className={classes.textField}
					margin='normal'
					id='email'
					name='email'
					label='Email'
					variant='outlined'
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>

				<TextField
					className={classes.textField}
					margin='normal'
					id='password'
					name='password'
					label='Password'
					type='password'
					variant='outlined'
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>


				<Button
					className={classes.button}
					color='primary'
					variant='contained'
					type='submit'>
					join our community
				</Button>
				<Typography className={classes.register}>
					Already Registered?
					<Link to='/login' className={classes.link}>
						Login here
					</Link>
				</Typography>
			</form>
		</div>
	)
}

export default Register
