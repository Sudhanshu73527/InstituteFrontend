import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/footer/Footer'

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Outlet />  {/* Pages go here */}
      <Footer />
    </div>
  )
}

export default Layout
