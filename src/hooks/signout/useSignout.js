
import toast from 'react-hot-toast';

import { logout } from '../../app/features/authSlice';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { base_url } from '../../constants/constant';

export const useSignout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutHandler = async () => {
    console.log('signout called ')
    const accessToken = localStorage.getItem('accessToken')
    try {
      const reqData = {
        accessToken: accessToken
      }
      const signOut = await fetch(base_url + "/users/signOut", {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData)

      })
      const response = await signOut.json()
      if (response.status >= 400) {
        console.log('signOut error', response.message)
      }
    } catch (error) {
      console.log('singout error', error)
    }
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')

    sessionStorage.removeItem('user')
    sessionStorage.removeItem('wishlist')
    dispatch(logout())
    toast.success('SignOut Success');
    navigate('/')

  }
  return { signOutHandler }

}

