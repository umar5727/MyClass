import React, { useEffect, useState } from 'react'
import { setWishlist } from '../app/features/authSlice';
import { useDispatch } from 'react-redux';
import useFetch from './useFetch';
import toast from 'react-hot-toast';
import { base_url } from '../constants/constant';

const useWishlist = (props) => {
  const {  courseId } = props;
  
  // console.log('inside useWishlist')
  // const [response, setResponse] = useState(null)
  // const { status, error, response, fetchData } = useFetch()
 
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
     const res = await fetch(`${base_url}/wishlist/addToWishlist`, options)
       
     const response = await res.json()
     if(!res.ok){
       console.log('error response ; : ',response) 
       toast.error(response.message || 'not able to add') 
       console.log('error : ',typeof response.message)
       throw new Error({message:response.message})
     }
       toast.success('added to Wishlist',response) 
       console.log('addtowishlist : ',response.wishlist)
       dispatch(setWishlist({ wishlist: response.wishlist }))
       sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
   } catch (error) {
      console.log('error ',error)
   }
        
      }
      
   


 const removeFromWishlist =async()=>{
  // console.log('remove from wishlist called')
 try {
   const res = await fetch(`${base_url}/wishlist/removeFromWishlist`, options)
     const response = await res.json();
     if(!res.ok){
 
       console.log('response error; : ',response) 
       toast.error(response.message || 'not able to remove') 
       console.log('error : ',message)
       throw new Error({message:response.message})
   }
     
   
       toast.success(response.message ||'removed from Wishlist') 
  
         console.log('removed from wishlist : ',response)
         dispatch(setWishlist({ wishlist: response.wishlist }))
         sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
 } catch (error) {
  console.log('error ',error)
 }
      
  
 }

  return {addToWishlist,removeFromWishlist}
}

export default useWishlist