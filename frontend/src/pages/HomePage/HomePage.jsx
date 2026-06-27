import React from 'react'
import Hero from '../../components/Hero/Hero'
import { useDispatch, useSelector }  from 'react-redux';
import { setUser } from '../../redux/auth/authSlice';


const HomePage = () => {
 // const dispatch= useDispatch();
  //const user= useSelector(state=>state.auth.user)
  return (
      <div>
    
     <Hero/>
    </div>
  )
}

export default HomePage
