import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
    userCoursesData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // console.log('data from authSlice: ', state.userData, " : ", action.payload.userData)
            state.status = true;
            state.userData = action.payload.userData;

        },
        UserCourses: (state, action) => {
            state.userCoursesData = action.payload.userCoursesData
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout, UserCourses } = authSlice.actions;

export default authSlice.reducer;