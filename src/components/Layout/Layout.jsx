import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className=' bg-black'>
        <Header/>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout