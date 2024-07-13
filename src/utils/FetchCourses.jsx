import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCourse } from '../app/features/courseSlice'
import { base_url } from '../constants/constant'
const FetchCourses = () => {
    const dispatch = useDispatch()
    // console.log(base_url)
    const fetchData = async () => {
        try {
            const response = await fetch(base_url + '/courses', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const courseData = await response.json();
            // console.log('courses res : ', courseData)
            // const courseData = response.courses
            dispatch(getCourse({ courseData }))
        } catch (error) {
            console.log('courses fetch error : ', error)
        }
    }
    useEffect(() => {

        fetchData();
    }, [])
}

export default FetchCourses