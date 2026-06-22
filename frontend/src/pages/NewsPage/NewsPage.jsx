import React, { useEffect, useState } from 'react'
import { getNews } from '../../api/newsApi';
import NewsList from '../../components/NewsList/NewsList';

const NewsPage = () => {
  const [news, setNews]= useState([]);
  const [page, setPage]=useState(1);
  const [totalPages, setTotalPages]=useState(1);

  useEffect(()=>{
    const fetchNews= async()=>{
      try{
        const data=await getNews(page,6);
    setNews(data.results);
    setTotalPages(data.totalPages);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchNews()
  },[page])
  return (
    <section>
      <div className='container'>
        <h2>News</h2>
        <NewsList news={news}/>
      </div>
    </section>
  )
}

export default NewsPage
