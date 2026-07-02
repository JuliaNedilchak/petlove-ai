import React from 'react'
import {Formik, Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import Header from '../../components/Header/Header';
import dogLogin from '../../assets/dogLogin.jpg';
import css from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

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
  const navigate=useNavigate();
  const dispatch= useDispatch();
  const handleSubmit= async values=>{
    try{
 dispatch(login(values)).unwrap();
 navigate('/profile');
  }
   catch(error){
    console.log(error);
   }
  }
  return (
  
      <div className='container'>
       <Header className='dark'/>
         <section className={css.loginPage}>
    <div>
      <img src={dogLogin}
      />
    </div>
    <div  className={css.form}>
    <h1>Log in</h1>
    <p>Welcome! Please enter your credentials to login to the platform:</p>
    <Formik 
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}>
          <Form className={css.inputs}>
            <label className={css.label} >
              
              <Field className={css.field} type='email' name='email' placeholder='Email'/>
              <ErrorMessage name='email' component='p'/>
            </label>
            <label >
              
              <Field className={css.field} type='password' name='password' placeholder='password'/>
              <ErrorMessage name='password' component='p'/>
            </label>
            <button className={css.button} type='submit'> log in </button>
          </Form>        
          </Formik>
          </div>
            </section>
      </div>
   
  )
}

export default LoginPage
