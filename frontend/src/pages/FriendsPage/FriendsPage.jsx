import React, { useEffect, useState } from 'react'
import FriendsList from '../../components/FriendsList/FriendsList'
import { getFriends } from '../../api/friendsApi';


const FriendsPage = () => {
  const [friends, setFriends]= useState([]);

  useEffect(()=>{
    const fetchFriends= async()=>{
      try{
        const data=await getFriends();
        setFriends(data);
      }
      catch(error){
        console.log(error)

      }
    }
    fetchFriends();
  },[])

  return (
   <section>
    <div className='container'>
      <h1>Our Friends</h1>
      <FriendsList friends={friends}/>
    </div>
   </section>
  )
}

export default FriendsPage
