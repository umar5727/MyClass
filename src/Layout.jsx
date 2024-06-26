import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import NavContextProvider from './context/navcontext/NavContextProvider'


const Layout = () => {
  return (
    <NavContextProvider>
        <Header />
        <Container>
          <div className='min-h-[calc(100vh-304px)]'>

            <Outlet />
          </div>
        </Container>
        <GotoTop />
        <Footer />
    </NavContextProvider>
  )
}

export default Layout