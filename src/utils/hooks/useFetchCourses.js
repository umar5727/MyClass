import { useEffect, useState } from "react"
import { base_url } from "../../constants/constant"

export default function useFetchCourses(url, options){
  const state = {
    idle: 'idle',
    Loading: 'loading',
    Error: 'error',
    success: 'success'
  }
  const [status, setStatus] = useState(state.Loading)
  const [error, setError] = useState(null)
  const [resData, setResData] = useState(null)

  useEffect(()=>{

    const  fetchData = async()=> {
      try {
        const res = await fetch(`${base_url}/${url}`, options)
        const response = await res.json()
        if (!res.ok) {
          throw new Error(response.message || 'not found')
        }
        setStatus(state.success)
        setResData(response)
      } catch (err) {
        setStatus(state.Error)
        setError(err.message)
      }
    }
    fetchData()
  },[])
  return {resData, status, error}
}