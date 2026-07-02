import { ErrorMessage, Field, Form, Formik } from 'formik';
 import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOperations';
import Header from '../../components/Header/Header';
import cat from '../../assets/cat.jpg';
import css from './RegisterPage.module.css';

const initialValues=({
  name:'',
  email:'',
  password:'',
})

const RegisterSchema= Yup.object({
  name:
  Yup.string().required(),
  email:
  Yup.string().email('Invalid email').required('email is required'),
  password:
  Yup.string().min(7, 'Password must be at least 7 characters').required('password is required')
})

const RegisterPage = () => {
 const navigate = useNavigate();
  const dispatch= useDispatch();
 const handleSubmit= async values=>{
 try{ await dispatch(register(values)).unwrap()
  navigate('/profile')

 }
 catch(error){
  console.log(error)
 }
}
 
    return (
   
    <div className='container'>
    <Header className='dark'/>
    <section className={css.RegisterPage}>
    <div>
      <img src={cat} alt='cat'/>
    </div>
    <div className={css.form}>
    <h1>Registration</h1>
    <h2>Thank you for your interest in our platform.</h2>
      <Formik
      initialValues={initialValues}
       validationSchema={RegisterSchema} 
       onSubmit={handleSubmit}>
       <Form className={css.inputs}>
        <label className={css.label}>
          
<Field  className={css.field} name='name' type='text' placeholder='name'/>
<ErrorMessage name='name' component='p'/>
        </label>
        <label className={css.label}>
          <Field  className={css.field} name='email' type='email' placeholder='email'/>
          <ErrorMessage name='email' component='p'/>
          </label>
           <label className={css.label}>
          <Field  className={css.field} name='password' type='password' placeholder='password'/>
          <ErrorMessage name='password' component='p'/>
          </label>
          <button className={css.button} type='submit'>Registration</button>
       </Form>
</Formik>
</div>
</section>
    </div>
   
  )
}

export default RegisterPage
