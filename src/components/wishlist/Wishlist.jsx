
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setWishlist } from '../../app/features/authSlice';
import useFetchData from '../../utils/fetch/useFetchData';
import toast from 'react-hot-toast';
import { base_url } from '../../constants/constant';

const Wishlist = ({ courseId }) => {

  const state = {
    idle: 'idle',
    Loading: 'loading',
    Error: 'error',
    success: 'success'
  }
  const [status, setStatus] = useState(state.idle)
  const [error, setError] = useState(null)

  const [display, setDisplay] = useState(false)

  const wishlistData = useSelector((state) => state.auth.wishlist)
  const dispatch = useDispatch()

  async function handleClick() {
    setStatus(state.Loading)
    if (display) {
      const wishlist = wishlistData?.filter((list) => {
        return list != courseId
      })
      dispatch(setWishlist({ wishlist }))
      console.log('list clicked ', wishlist)

    } else {

      // adding courseId to wishlist 
      try {
        const accessToken = localStorage.getItem('accessToken')
        const res = await fetch(`${base_url}/wishlist/addToWishlist`, {
          mode: 'cors',
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken, courseId: courseId })
        })

        if (!res.ok) {
          const response = await res.json()
          throw new Error(response.message || 'not found')
        }
        const response = await res.json()

        dispatch(setWishlist({ wishlist: response.wishlist }))
        toast.success('Added to Wishlist')
        sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
      } catch (err) {
        toast.error('Not able to Add', error)
        setError(err.message)
      }

    }

    setDisplay(!display)
  }
  useEffect(() => {
    wishlistData?.forEach(list => {
      if (courseId === list._id) {

        setDisplay(true)
      }

    });
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