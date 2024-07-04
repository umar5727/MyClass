import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Signout = () => {

    const navigate = useNavigate();

    const handler = async () => {

        const signOut = await fetch("http://localhost:8000/api/v1/users/signOut", {
            mode: cors,
            method: 'POST'
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