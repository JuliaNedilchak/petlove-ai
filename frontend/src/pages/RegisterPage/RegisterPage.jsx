import React from 'react'
import * as Yup from 'yup';

const RegisterSchema= Yup.object({
  name:
  Yup.string().required(),
  email:
  Yup.email('Invalid email').required('email is required'),
  password:
  Yup.string().min(7, 'Password must be at least 7 characters').required('password is required')
})

const RegisterPage = () => {
  return (
    <div>
      register
    </div>
  )
}

export default RegisterPage
