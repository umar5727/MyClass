import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    status: false,
    courseData: null
}

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        getCourse: (state, action) => {
            state.status = true
            state.courseData = action.payload.courseData;
        }
    }
})

export const { getCourse } = courseSlice.actions
export default courseSlice.reducer;
