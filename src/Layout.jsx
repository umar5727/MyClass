import React, { useContext, useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import { LoadingContextProvider, NavContextProvider } from './context'
import { Loading } from './components'



const Layout = () => {


  useEffect(() => {


  }, [])
  return (
    <>
      <LoadingContextProvider>
        <NavContextProvider >

          <Loading />
          <Header />
          <Container>
            <div className='min-h-[calc(100vh-304px)]'>

              <Outlet />
            </div>
          </Container>
          <GotoTop />
          <Footer />

        </NavContextProvider >
      </LoadingContextProvider >
    </>

  )
}

export default Layout