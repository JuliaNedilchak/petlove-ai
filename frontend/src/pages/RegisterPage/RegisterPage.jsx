import { ErrorMessage, Field, Form, Formik } from 'formik';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOperations';

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
  const dispatch= useDispatch();
 const handleSubmit=(values)=>{
  dispatch(register(values))};
    return (
   <section>
    <div className='container'>
      <Formik
      initialValues={initialValues}
       validationSchema={RegisterSchema} 
       onSubmit={handleSubmit}>
       <Form>
        <label>
          name
<Field name='name' type='name' placeholder='name'/>
<ErrorMessage name='name' component='p'/>
        </label>
        <label>
          <Field name='email' type='email' placeholder='email'/>
          <ErrorMessage name='email' component='p'/>
          </label>
           <label>
          <Field name='password' type='password' placeholder='password'/>
          <ErrorMessage name='password' component='p'/>
          </label>
          <button type='submit'>Registration</button>
       </Form>
</Formik>
    </div>
   </section>
  )
}

export default RegisterPage
