import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL= 'https://petlove.b.goit.study/api';

export const login = createAsyncThunk(
    'auth/login',
     async (credentials, thunkAPI) =>{
        try{
            const {data} =await axios.post('/users/signin', credentials);
            return data;

        }
        catch (error){
           return thunkAPI.rejectWithValue(error.message)
        }
     }
)

export const register = createAsyncThunk(
   'auth/signup',
   async(credentials, thunkAPI)=>{
      try{
         const {data}= await axios.post('/users/signup', credentials);
         return data;
      }
      catch(error) {
       return thunkAPI.rejectWithValue(error.message);
      }
   }
)