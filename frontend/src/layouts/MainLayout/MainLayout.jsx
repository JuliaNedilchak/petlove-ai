import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const MainLayout = () => {
  return (
    <>
        
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default MainLayout
