
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWishlist } from '../../app/features/authSlice';

const Wishlist = (courseId) => {
  const [display, setDisplay] = useState(false)
  const wishlistData = useSelector((state) => state.auth.wishlist)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (display) {
      const wishlist = wishlistData.filter((list) => {

        return list != courseId
      })
      dispatch(setWishlist({ wishlist }))
      console.log('list clicked ', wishlist)

      // setDisplay(false)

    } else {
      const wishlist = [...wishlistData, courseId]
      dispatch(setWishlist({ wishlist }))
      // setDisplay(true)

    }

    setDisplay(!display)
  }
  useEffect(() => {
    setDisplay(wishlistData?.includes(courseId))
    console.log('wishlist data ', wishlistData)
  }, [wishlistData])

  return (
    <div className="text-primary-danger cursor-pointer"
      title="add to wishlist"
      onClick={handleClick}
    >

      {
        display
          ?
          <FontAwesomeIcon icon={faHeart} />
          :
          <FontAwesomeIcon icon={regular} />
      }
    </div>
  )
}

export default Wishlist