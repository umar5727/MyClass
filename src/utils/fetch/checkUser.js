import { useDispatch } from "react-redux"
import { isLoading, login, stopLoading } from "../../app/features/authSlice"

 const checkUser = async () => {
  const dispatch = useDispatch()
  dispatch(isLoading())
  try {
    const refreshToken = document.cookie
    //fetching user
    if (!refreshToken) {
      return ''
    }
    const currentUser = await fetch(base_url + "/users/refreshAccessToken ", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken })
    })
    // when user is fetched we update the state
    const existUser = await currentUser.json();
    if (existUser.data) {
      const userData = await existUser.data.user;
      dispatch(login({ userData }));
      // navigate('/MyClass/dashboard')
    }
  } catch (error) {
    console.log("layout ", error)
  } finally {
    setTimeout(() => {
      
      dispatch(stopLoading())

    }, 500)
  }
}
export default checkUser