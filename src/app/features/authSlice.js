import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    userCoursesData: null,
    wishlist:null,
    isLoading:false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log('data from authSlice: ', state.userData, " : ", action.payload.userData)
            state.status = true;
            state.userData = action.payload.userData;
           
                state.isLoading =false
           
        },
        UserCourses: (state, action) => {
            state.userCoursesData = action.payload.userCoursesData
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        setWishlist:(state, action)=>{
            state.wishlist = action.payload.wishlist
        },
        isLoading:(state, action)=>{
            state.isLoading =true
        },
        stopLoading:(state, action)=>{
            state.isLoading =false
        }
    }
})

export const { login, logout, UserCourses,isLoading,stopLoading, setWishlist } = authSlice.actions;

export default authSlice.reducer;