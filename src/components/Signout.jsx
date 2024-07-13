import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux';
import { login } from '../app/features/authSlice';
import { base_url } from '../constants/constant';
const Signout = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handler = async () => {

        // console.log(accesstoken)

        const signOut = await fetch(base_url + "/users/signOut", {
            mode: 'cors',
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },

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