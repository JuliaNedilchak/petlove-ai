import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
  return (
    <div>
      <Link to='profile'>Profile</Link>
      <button type='button'>log out</button>
    </div>
  )
}

export default UserNav
