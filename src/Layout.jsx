import React, { Suspense, useContext, useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import { LoadingContextProvider, NavContextProvider } from './context'
import { Loading } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './app/features/authSlice'
import { base_url } from './constants/constant'

import toast, { Toaster } from 'react-hot-toast';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const courseData = useSelector((state) => state.course.courseData)

  const alreadyUser = useSelector((state) => state.auth.userData)
  useEffect(() => {
    // console.log('\nbefore fetch from layout : ', alreadyUser)

    if (!alreadyUser) {
      const checkUser = async () => {
        const refreshToken = document.cookie
        //fetching user
        if (!refreshToken) {
          return ''
        }
        const currentUser = await fetch(base_url + "/users/refreshAccessToken ", {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken })
        })
        // when user is fetched we update the state
        const existUser = await currentUser.json();
        if (existUser.data) {
          const userData = existUser.data.user;
          dispatch(login({ userData }));
          navigate('/MyClass/dashboard')
        } else {
          dispatch(logout());

        }
      }
      checkUser();
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: '1500' })
  }, [])
  return (
    <>
      <LoadingContextProvider>
        <NavContextProvider >       {/* context provider for practice  */}
          {/* <Loading /> */}
          <Header />
          <Container>
            <Toaster
              position='top-right'
              reverseOrder={false}
            />
            <div className='min-h-[calc(100vh-304px)]'>
              <Suspense>

                <Outlet />
              </Suspense>
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