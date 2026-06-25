import React, { useEffect, useState } from 'react'
import { getNotices } from '../../api/noticesApi';
import NoticesList from '../../components/NoticesList/NoticesList';

const NoticesPage = () => {

const [pets, setPets]= useState([]);
const [page, setPage]=useState(1);
const [totalPages, setTotalPages]=useState(1);

useEffect(()=>{
  const fetchPets = async()=>{
    try{
      const data= await getNotices(page, 6);
     setPets(data.results);
     setTotalPages(data.totalPages);
    }
    catch(error){
      console.log(error)
    }
  }
  fetchPets();
},
[page])


  return (
    <div>
      <NoticesList pets={pets}/>
    </div>
  )
}

export default NoticesPage
