
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle, faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useWishlist from '../../hooks/useWishlist';
import Popup from '../popups/Popup';



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
            className='group/wishlist z-50 text-green-600 font-extrabold text-base relative'
          >
            <Popup text="Already Enrolled" />
            <FontAwesomeIcon icon={faCheckCircle} />
          </div >
          :
          <div className="group/wishlist text-primary-danger cursor-pointer relative"

            onClick={display ? removeFromWishlist : addToWishlist}
          >
            {
              display
                ?
                <div>
                  <Popup text="Remove from Wishlist" />
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                :
                <div>
                  <Popup text="Add to Wishlist" />
                  <FontAwesomeIcon icon={regular} />
                </div>
            }
          </div>
      }
    </>
  )
}

export default Wishlist