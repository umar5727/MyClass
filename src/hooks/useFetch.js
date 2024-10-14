import React, { useEffect, useState } from 'react'
import { base_url } from '../constants/constant'

const useFetch = () => {
  const state = {
    idle: 'idle',
    loading: 'loading',
    error: 'error',
    success: 'success'
  }
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')
  // console.log('useFetch ')
  const fetchData = async ({ url, options }) => {

    setStatus('loading')
    try {

      const res = await fetch(`${base_url}/${url}`, options)
      const Response = await res.json();

      if (!res.ok) {
        console.log('userFetch error')
        throw new Error(Response.message)
      }
      setStatus('success')
      setResponse(Response)

    } catch (error) {
      console.log('userFetch error')
      setStatus('error')
      setError(error)
    }

  }



  return { status, error, response, fetchData }
}

export default useFetch