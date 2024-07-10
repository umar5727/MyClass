import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import courseSlice from './features/courseSlice';
// import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        //TODO: add more slices here for posts
        course: courseSlice,
    }
});


export default store;