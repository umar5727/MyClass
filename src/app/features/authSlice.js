import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: JSON.parse(localStorage.getItem('localUser')) || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('data from authSlice: ', state.userData, " : ", action.payload.userData)
            state.status = true;
            state.userData = action.payload.userData;
            localStorage.setItem('localUser', JSON.stringify(state.userData))
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;