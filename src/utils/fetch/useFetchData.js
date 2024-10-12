
import { useEffect, useState } from "react"
import { base_url } from "../../constants/constant"

function useFetchData(url='', options = {}) {

  const state = {
    idle: 'idle',
    Loading: 'loading',
    Error: 'error',
    success: 'success'
  }
  const [status, setStatus] = useState(state.Loading)
  const [error, setError] = useState(null)
  const [resData, setResData] = useState(null)
  async function fetchData() {
    // setStatus(state.Loading)
    try {
      const res = await fetch(`${base_url}/${url}`, options
      )
      const response = await res.json()
      if (!res.ok) {
        throw new Error(response.message || 'not found')
      }
      setStatus(state.ok)
      setResData(response)
    } catch (err) {
      setStatus(state.Error)
      setError(err.message)
    }
  }
  useEffect(() => {
  fetchData();
  }, [])
  return { resData, status, error };
  // return status
}

export default useFetchData