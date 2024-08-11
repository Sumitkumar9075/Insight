import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Library from '../components/Library'


function Librarys() {
  return (
   <>
   <Navbar/>
   <div className="min-h-screen">
   <Library/>
   </div>
   <Footer/>
   </>
  )
}

export default Librarys