
import { setWishlist } from '../app/features/authSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { base_url } from '../constants/constant';

const useWishlist = (props) => {
  const { courseId } = props;

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
      if (!res.ok) {
        toast.error(response.message || 'not able to add')
        throw new Error({ message: response.message })
      }
      toast.success('added to Wishlist', response)

      dispatch(setWishlist({ wishlist: response.wishlist }))
      sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
    } catch (error) {
      console.log('error ', error)
    }
  }




  const removeFromWishlist = async () => {

    try {
      const res = await fetch(`${base_url}/wishlist/removeFromWishlist`, options)
      const response = await res.json();
      if (!res.ok) {
        toast.error(response.message || 'not able to remove')

        throw new Error({ message: response.message })
      }

      toast.success(response.message || 'removed from Wishlist')

      dispatch(setWishlist({ wishlist: response.wishlist }))
      sessionStorage.setItem('wishlist', JSON.stringify(response.wishlist))
    } catch (error) {
      console.log('error ', error)
    }


  }

  return { addToWishlist, removeFromWishlist }
}

export default useWishlist