import React, { useContext, useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import { LoadingContext, LoadingContextProvider, NavContextProvider } from './context'
import { Loading } from './components'



const Layout = () => {
  const { loading, setLoading } = useContext(LoadingContext)

  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll')
    }
    else {

      document.body.classList.remove('no-scroll')
    }
    setTimeout(() => {
      setLoading(false)

    }, 2000);

  }, [loading])
  return (
    <>
      <Loading />
      <Header />
      <Container>
        <div className='min-h-[calc(100vh-304px)]'>

          <Outlet />
        </div>
      </Container>
      <GotoTop />
      <Footer />
    </>

  )
}

export default Layout