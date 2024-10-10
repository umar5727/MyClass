import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux';
import { login, UserCourses } from '../app/features/authSlice';
import { base_url } from '../constants/constant';
import toast from 'react-hot-toast';
const Signout = () => {
    const user = useSelector((state) => state.auth.userData)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handler = async () => {
        const accessToken = localStorage.getItem('accessToken')
        const reqData = {
            accessToken: accessToken
        }
        const signOut = await fetch(base_url + "/users/signOut", {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqData)

        })
        const response = await signOut.json()
        if (response.status >= 400) {
            toast.error('server error');
        }
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        const userData = null;
        const courseData = null;
        sessionStorage.removeItem('user')
        dispatch(login({ userData }))
        dispatch(UserCourses({ courseData }))
        toast.success('SignOut Success');
        navigate('/')

    }
    useEffect(() => {
        if (user) {
            handler();
        }

    }, [])

    return (
        <div>Signout</div>
    )
}

export default Signout