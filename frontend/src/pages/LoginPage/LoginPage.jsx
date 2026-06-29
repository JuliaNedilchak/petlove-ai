import React from 'react'
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { login } from '../../redux/auth/authOperations';

const LoginSchema = Yup.object({
  email: 
  Yup.string().email('Invalid email').required('Email is required'),
  password:
  Yup.string().min(7,'Password must be at least 7 characters').required('Password is required'),
})

const initialValues=({
  email:'',
  password:'',
})

const LoginPage = () => {
  const dispatch= useDispatch();
  const handleSubmit=values=>{
    dispatch(login(values))
  }
  return (
    <section>
      <div className='container'>
        <h1>Log in</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}>
          <Form>
            <label>
              Email
              <Field type='email' name='email' placeholder='Email'/>
              <ErrorMessage name='email' component='p'/>
            </label>
            <label>
              Password
              <Field type='password' name='password' placeholder='password'/>
              <ErrorMessage name='password' component='p'/>
            </label>
            <button type='submit'> log in </button>
          </Form>        
          </Formik>
      </div>
    </section>
  )
}

export default LoginPage
