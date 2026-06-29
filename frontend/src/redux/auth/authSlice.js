import { createSlice } from "@reduxjs/toolkit"
import { login, register } from "./authOperations";



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
    reducers: {},
    extraReducers: builder=>{
        builder
        .addCase(login.pending, state=>{
            state.isLoading=true;
            state.error=null;
        })
        .addCase(login.fulfilled,(state, action) =>
         {console.log(action.payload)
            state.isLoading=false;
            state.user=action.payload.user;
            state.token=action.payload.token;
            state.isLoggedIn=true;
         }
        )
        .addCase(login.rejected, (state, action)=>{
            state.isLoading=false;
            state.error= action.payload;
        })
        .addCase(register.pending,  state=>{
            state.isLoading=true;
            state.error=null;
        }
        )
    }
})

export default authSlice.reducer;