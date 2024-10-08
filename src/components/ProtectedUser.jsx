import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedUser = () => {
    console.log('protected user page',)
    const loading = useSelector((state) => state.auth.isLoading)
    console.log("loading", loading)
    const userData = useSelector((state) => state.auth.userData)    //using redux 
    // const localUser = localStorage.getItem('localUser')  //using localStorage

    return userData ? (<Outlet />) : (<Navigate to={'/'} />)
}

export default ProtectedUser