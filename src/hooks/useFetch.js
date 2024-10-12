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
  const [status, setStatus] = useState(state.idle)
  // console.log('useFetch ')
  const fetchData = async ({url,options}) => {
    setStatus(state.loading)
    try {
      
      const res = await fetch(`${base_url}/${url}`, options)

      const response = await res.json();

      if (res.ok) {
        setStatus(state.success)
        setResponse(response)
      }else{

        setStatus(state.error)
        setError(response)
      }
    } catch (error) {
      setStatus(state.error)
      setError(error)
    }

  }



  return { status, error, response, fetchData }
}

export default useFetch