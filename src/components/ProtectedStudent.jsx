import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedStudent = () => {


    const localUser = localStorage.getItem('localUser')


    return localUser ? <Outlet /> : <Navigate to={'/MyClass/'} />

}

export default ProtectedStudent