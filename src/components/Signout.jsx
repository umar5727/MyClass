import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux';
import { login } from '../app/features/authSlice';
const Signout = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handler = async () => {
        const accesstoken = localStorage.getItem('accessToken')
        console.log(accesstoken)

        const signOut = await fetch("http://localhost:8000/api/v1/users/signOut", {
            mode: 'cors',
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(userData._id)
        })
        const response = await signOut.json()
        console.log(response.message)
    }
    useEffect(() => {
        const userData = null;
        handler();
        dispatch(login({ userData }))
        navigate('/MyClass/')

    }, [])

    return (
        <div>Signout</div>
    )
}

export default Signout