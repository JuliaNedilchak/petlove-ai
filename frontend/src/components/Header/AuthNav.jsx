import React from 'react'
import { Link } from 'react-router-dom'
import css from './AuthNav.module.css'


const AuthNav = () => {
  return (
    <div className={css.authBlock}>
      <Link className={css.auth} to='/login'>Log in</Link>
      <Link className={css.auth} to='/register'>Registration</Link>

    </div>
  )
}

export default AuthNav
