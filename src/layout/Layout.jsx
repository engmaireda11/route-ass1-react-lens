import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return ( 
    <>
    
    <Navbar/>
   <div className='mt-[80px]'>
     <Outlet/>
   </div>

   <Footer/>
    
    
    </>
   

  )
}
