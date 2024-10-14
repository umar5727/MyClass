
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux';
import { isLoading, login, UserCourses } from '../app/features/authSlice';
import { base_url } from '../constants/constant';
import toast from 'react-hot-toast';
const Signout = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    dispatch(isLoading())
    const handler = async () => {
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
                // toast.error('server error');
                console.log('signOut error', response.message)
            }
        } catch (error) {
            console.log('singout error', error)
        }
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
        const userData = null;
        const courseData = null;
        sessionStorage.removeItem('user')
        dispatch(login({ userData }))
        dispatch(UserCourses({ courseData }))
        toast.success('SignOut Success');
        navigate('/')

    }

}

export default Signout