import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourse } from '../app/features/courseSlice'
import { base_url } from '../constants/constant'
const FetchCourses = () => {
    const dispatch = useDispatch()
    const allCourses = useSelector((state) => state.course.courseData)

    // console.log(base_url)
    const fetchData = async () => {
        try {
            const response = await fetch(base_url + '/courses/', {
                mode: 'cors',
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const courseData = await response.json();

            dispatch(getCourse({ courseData }))
        } catch (error) {
            console.log('courses fetch error : ', error)
        }
    }
    useEffect(() => {
        if (!allCourses) {

            fetchData();
        }

    }, [])
}

export default FetchCourses