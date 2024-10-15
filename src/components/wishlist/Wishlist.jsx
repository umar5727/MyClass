
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useWishlist from '../../hooks/useWishlist';



const Wishlist = ({ courseId }) => {
  const { addToWishlist, removeFromWishlist } = useWishlist({ courseId: courseId });
  const [display, setDisplay] = useState(false)

  const wishlistData = useSelector((state) => state.auth.wishlist)
  const userCourses = useSelector((state) => state.auth.MyCourses)

  const userCoursesId = userCourses?.map((enroll) => enroll.course.toString())

  useEffect(() => {
    if (!wishlistData) {
      setDisplay(false)
    } else {

      setDisplay(wishlistData.includes(courseId))
    }

  }, [wishlistData])

  return (
    <>
      {
        userCoursesId?.includes(courseId)
          ?
          <div
            className="text-green-600 font-extrabold text-base"
            title='Already Enrolled'
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </div >
          :
          <div className="text-primary-danger cursor-pointer"
            title="add to wishlist"
            onClick={display ? removeFromWishlist : addToWishlist}
          >
            {
              display
                ?
                <FontAwesomeIcon icon={faHeart} />
                :
                <FontAwesomeIcon icon={regular} />
            }
          </div>
      }
    </>
  )
}

export default Wishlist