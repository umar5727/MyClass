import React, { useEffect, useState } from 'react'
import { setWishlist } from '../app/features/authSlice';
import { useDispatch } from 'react-redux';
import useFetch from './useFetch';
import toast from 'react-hot-toast';

const useWishlist = (props) => {
  const {  courseId } = props;
  
  // console.log('inside useWishlist')
  // const [response, setResponse] = useState(null)
  const { status, error, response, fetchData } = useFetch()
 
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem('accessToken')

  const options = {
    mode: 'cors',
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accessToken, courseId: courseId })
  }
  const addToWishlist = async () => {
    try {
      fetchData({url:'wishlist/addToWishlist',options})
      // console.log("satus::: ",status)
      if(status === 'error'){
        console.log('response ; : ',response)
        const message =typeof error.message ==='string'?error.message:"Not able to add"  
        toast.error(message) 
        console.log('error : ',typeof error)
      }
      if(status === 'success'){
        toast.success('added to Wishlist') 
        if(response){
          console.log('addtowishlist : ',response.wishlist)
          dispatch(setWishlist({ wishlist: response.wishlist }))
          sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
        }
      }
    } catch (error) {
      
      console.log(error)
    }

  }

 const removeFromWishlist =async()=>{
  console.log('remove from wishlist called')
 }

  return {addToWishlist,removeFromWishlist}
}

export default useWishlist