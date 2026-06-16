import React from 'react'
import { Link } from 'react-router-dom'
import AuthNav from './AuthNav'
import UserNav from './UserNav';
import css from './Header.module.css'

const Header = () => {
  const isLoggedIn=false;
  return (
    <header className={css.header}>
        <Link className={css.symbol} to='/home'>petlove</Link>
        <nav className={css.nav}>
            <Link className={css.category} to='/news'>News</Link>
            <Link className={css.category} to= '/notices'>Find pet</Link>
            <Link className={css.category} to='/friends'>Our friends</Link>
        </nav>
       {isLoggedIn ? <UserNav/> : <AuthNav/>}
    </header>
  )
}

export default Header
