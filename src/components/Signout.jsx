import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCookies } from 'react-cookie';
const Signout = () => {
    const [cookies, setCookies, removeCookies] = useCookies('user')
    const [userValue, setUserValue] = useState(null)
    const navigate = useNavigate();

    const handler = async () => {
        const accesstoken = localStorage.getItem('accessToken')
        console.log(accesstoken)
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`, // Assuming access token in local storage
        };

        const signOut = await fetch("http://localhost:8000/api/v1/users/signOut", {
            mode: 'cors',
            method: 'POST',
            headers
        })
        const response = await signOut.json()
        console.log(response.message)
    }
    useEffect(() => {

        handler();
        navigate('/MyClass/')

    }, [])

    return (
        <div>Signout</div>
    )
}

export default Signout