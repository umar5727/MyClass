
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWishlist } from '../../app/features/authSlice';
import useFetchData from '../../utils/fetch/useFetchData';
import toast from 'react-hot-toast';
import { base_url } from '../../constants/constant';
import useWishlist from '../../hooks/useWishlist';



const Wishlist = ({ courseId }) => {
  const { addToWishlist, removeFromWishlist } = useWishlist({ courseId: courseId });
  // const { status, error } = useWishlist({ url: 'addWishlist', courseId: courseId })
  // function AddToWishlist() {

  //   // const { status, error } = useWishlistFetch({ url: 'addToWishlist', courseId: courseId });


  //   if (status === 'loding') {
  //   }
  //   if (status === 'error') {
  //     toast.error('Not able to Add')
  //     console.log('wishlist error : ', error)
  //   }
  //   if (status === 'success') {
  //     toast.success('Added to Wishlist')
  //   }
  // }

  const [display, setDisplay] = useState(false)

  const wishlistData = useSelector((state) => state.auth.wishlist)
  const dispatch = useDispatch()
  // async function HandleClick() {
  //   // setStatus(state.Loading)
  //   if (display) {
  //     const wishlist = wishlistData?.filter((list) => {
  //       return list != courseId
  //     })
  //     dispatch(setWishlist({ wishlist }))
  //     console.log('list clicked ', wishlist)

  //   } else {

  //     // adding courseId to wishlist 

  //     const { status, error } = useWishlistFetch({ url: 'addToWishlist', courseId: courseId });
  //     if (status === 'loding') {
  //     }
  //     if (status === 'error') {
  //       toast.error('Not able to Add')
  //       console.log('wishlist error : ', error)
  //     }
  //     if (status === 'success') {
  //       toast.success('Added to Wishlist')
  //     }
  //   }

  //   setDisplay(!display)
  // }
  useEffect(() => {
    wishlistData?.forEach(list => {
      if (courseId === list) {

        setDisplay(true)
      }

    });
  }, [wishlistData])
  // console.log('display wishlist : ', display)

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