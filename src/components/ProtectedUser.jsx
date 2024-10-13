import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedUser = () => {

    const userData = useSelector((state) => state.auth.userData)

    return userData ? (<Outlet />) : (<Navigate to={'/'} />)
}

export default ProtectedUser