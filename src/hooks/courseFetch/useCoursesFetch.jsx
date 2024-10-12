import React from 'react'
import useFetch from '../useFetch'

const useCoursesFetch = () => {
  const options = {
    mode: 'cors',
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  }
  const { status, error, response } = useFetch('courses/', options)
  return { status, error, response }
}

export default useCoursesFetch