import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
    
}
const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state,action) {
            state.user=action.payload;
        }
    },
})
export const {setUser} = authSlice.actions;
export default authSlice.reducer;