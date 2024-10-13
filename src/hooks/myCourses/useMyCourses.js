import { useDispatch, useSelector } from "react-redux"

import { useEffect } from "react"
import { base_url } from "../../constants/constant"
import { getMyCourses } from "../../app/features/authSlice"


export const useMyCourses = () => {
  const userData = useSelector((state) => state.auth.userData)
  const dispatch = useDispatch()
  const myCoursesFetch = async () => {
    if (!userData) {
      return ''
    }
    try {
      const accessToken = localStorage.getItem('accessToken')

      const response = await fetch(base_url + '/enrolled/getMyCourses', {
        mode: 'cors',
        method: 'POST',
        credentials: "include",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify({ userId: userData._id, accessToken })
      })
      const courseData = await response.json();
      if (!response.ok) {
        dispatch(getMyCourses(null))
        throw new Error({ message: courseData.message })
      }
      const myCourses = courseData.myCourses

      dispatch(getMyCourses({ myCourses }))
    } catch (error) {
      console.log('courses fetch error : ', error)
    }
  }
  useEffect(() => {
    myCoursesFetch()

  }, [userData])

}