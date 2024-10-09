import React, { Suspense, useContext, useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import { LoadingContextProvider, NavContextProvider } from './context'
import { Loading } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading, login, logout, stopLoading } from './app/features/authSlice'
import { base_url } from './constants/constant'

import toast, { Toaster } from 'react-hot-toast';

import AOS from 'aos'
import 'aos/dist/aos.css'
import FetchCourses from './utils/FetchCourses'

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const courseData = useSelector((state) => state.course.courseData)

  const alreadyUser = useSelector((state) => state.auth.userData)


  console.log('initial user : ', alreadyUser)
  const checkUser = async () => {
    try {
      // const refreshToken = document.cookie
      const refreshToken = localStorage.getItem('refreshToken')
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
        const userData = await existUser.data.user;
        dispatch(login({ userData }));

        localStorage.setItem('refreshToken', existUser.refreshToken)
        localStorage.setItem('accessToken', existUser.accessToken)
        // navigate('/MyClass/dashboard')
      }
    } catch (error) {
      console.log("layout ", error)
    } finally {
      setTimeout(() => {

        dispatch(stopLoading())

      }, 500)
    }
  }

  useEffect(() => {
    console.log('userData : ', alreadyUser)
    console.log('\nbefore fetch from layout : ', alreadyUser)
    if (!alreadyUser) {
      console.log('userData not : ', alreadyUser)
      const localUser = JSON.parse(sessionStorage.getItem('user'));
      if (localUser) {
        dispatch(login({ userData: localUser }))
      } else {
        dispatch(isLoading())
        checkUser();
      }
    } else {
      dispatch(logout());
    }
  }, [])

  useEffect(() => {
    AOS.init({ duration: '1500' })
  }, [])

  const loading = useSelector((state) => state.auth.isLoading)
  console.log('loading : ', loading)
  if (loading) {
    return <Loading />
  }
  return (
    <>

      <LoadingContextProvider>
        <NavContextProvider >       {/* context provider for practice  */}
          {/* <Loading /> */}
          <FetchCourses />
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