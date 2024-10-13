import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { base_url } from "../../constants/constant"
import { getMyCourses } from "../../app/features/authSlice"
import { useState } from "react"

export const useEnrollFetch = (courseId) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.userData)

  const [status, setStatus] = useState('idle')
  const enrollFetch = async () => {
    if (!userData) {
      navigate('/login')
    }
    try {
      const response = await fetch(base_url + `/enrolled/${courseId}/addEnrolled`, {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userData?._id })
      })
      const courseData = await response.json();
      if (!response.ok) {
        toast.error('enrolled error')

        // dispatch(getMyCourses(null))
        throw new Error({ message: courseData.message })
      }
      toast.success('enrolled success')
      const myCourses = courseData.myCourses
      console.log('mycourses', myCourses)
      setStatus('success')
      dispatch(getMyCourses({ myCourses }))
    } catch (error) {
      console.log('courses fetch error : ', error)
    }
  }
  return { status, enrollFetch }
}
