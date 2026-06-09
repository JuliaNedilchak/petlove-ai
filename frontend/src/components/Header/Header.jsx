import React from 'react'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'
import UserNav from './UserNav';

const Header = () => {
  const isLoggedIn=false;
  return (
    <header>
        <Link to='/home'>petlove</Link>
        <nav>
            <Link to='/news'>News</Link>
            <Link to= '/notices'>Find pet</Link>
            <Link to='/friends'>Our friends</Link>
        </nav>
       {isLoggedIn ? <UserNav/> : <AuthNav/>}
    </header>
  )
}

export default Header
