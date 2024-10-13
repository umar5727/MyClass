
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useWishlist from '../../hooks/useWishlist';



const Wishlist = ({ courseId }) => {
  const { addToWishlist, removeFromWishlist } = useWishlist({ courseId: courseId });

  const [display, setDisplay] = useState(false)

  const wishlistData = useSelector((state) => state.auth.wishlist)


  useEffect(() => {
    setDisplay(wishlistData.includes(courseId))

  }, [wishlistData])


  return (
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
  )
}

export default Wishlist