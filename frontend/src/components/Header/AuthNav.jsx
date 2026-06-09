import React from 'react'
import { Link } from 'react-router-dom'

const AuthNav = () => {
  return (
    <div>
      <Link to='/login'>Log in</Link>
      <Link to='/register'>Registration</Link>

    </div>
  )
}

export default AuthNav
