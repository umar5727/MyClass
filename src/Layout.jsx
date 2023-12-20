import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'


const Layout = () => {
  return (
    <>
        <Header />
        <Container>
            <Outlet />
        </Container>
        <GotoTop />
        <Footer />
    </>
  )
}

export default Layout