import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header,Footer} from './Components'
import FAQ_Chatbot from './Components/BookAppointment/FAQ_Chatbot'



function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    <FAQ_Chatbot />
    </>
  )
}

export default Layout