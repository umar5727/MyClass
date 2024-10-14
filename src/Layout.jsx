import React, { Suspense, useContext, useEffect } from 'react'
import Header from './components/header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'
import Container from './components/Container'
import GotoTop from './components/GotoTop'
import { LoadingContextProvider, NavContextProvider } from './context'
import { Loading } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { isLoading, login, logout, setWishlist, stopLoading } from './app/features/authSlice'
import { base_url } from './constants/constant'

import { Toaster } from 'react-hot-toast';

import AOS from 'aos'
import 'aos/dist/aos.css'
import FetchCourses from './utils/FetchCourses'
import { useMyCourses } from './hooks/myCourses/useMyCourses'





const Layout = () => {

  useMyCourses()

  const dispatch = useDispatch()

  const alreadyUser = useSelector((state) => state.auth.userData)
  const loading = useSelector((state) => state.auth.isLoading)

  const navigate = useNavigate()
  const checkUser = async () => {

    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      dispatch(logout());
      localStorage.removeItem('user')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      return ''
    }
    try {
      //fetching user

      const res = await fetch(base_url + "/users/refreshAccessToken ", {
        mode: "cors",
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken, accessToken })
      })
      // when user is fetched we update the state
      const existUser = await res.json();
      if (res >= 400) {
        throw new Error({ message: existUser.message })
      }
      const userData = await existUser.data.user;
      dispatch(login({ userData }));
      dispatch(setWishlist({ wishlist: existUser.data.wishlist }))
      const { newaccessToken, newrefreshToken } = existUser;

      localStorage.setItem('user', userData)
      localStorage.setItem('accessToken', newaccessToken)
      localStorage.setItem('refreshToken', newrefreshToken)
      navigate('../')
    } catch (error) {
      navigate('/')
      console.log("layout fetch error", error)
      dispatch(logout());
    }
  }





  useEffect(() => {
    if (!alreadyUser) {
      console.log("!already User ", alreadyUser)
      dispatch(isLoading())
      const localUser = JSON.parse(sessionStorage.getItem('user'));
      if (!localUser) {
        console.log("!local User ", localUser)
        checkUser();
      } else {
        console.log("local User get", localUser)
        const wishlist = JSON.parse(sessionStorage.getItem('wishlist'));
        dispatch(login({ userData: localUser }))
        dispatch(setWishlist({ wishlist }))

      }
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
          <FetchCourses />
          <Loading />
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