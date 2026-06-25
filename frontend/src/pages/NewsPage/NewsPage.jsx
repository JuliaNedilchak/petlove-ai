import React, { useEffect, useState } from 'react'
import { getNews } from '../../api/newsApi';
import NewsList from '../../components/NewsList/NewsList';
import Header from '../../components/Header/Header';
import css from './NewsPage.module.css';

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
    <div className='container'>
    <Header className='dark'/>
    <section>
      <div>
        <h2>News</h2>
        <NewsList news={news}/>
        <div className={css.paginList}>
          <button className={css.pagin} type='button' 
          onClick={()=> setPage(page-1)}
            disabled={page===1}
          > &lt; </button>
         
          <button  className={css.pagin} type='button' 
          onClick={()=> setPage(1)}> 1 </button>
          <button  className={css.pagin} type='button' 
          onClick={()=> setPage(2)}
           
          > 2 </button>
          <button  className={css.pagin} type='button' 
          onClick={()=> setPage(3)}
            
          > 3 </button>
          <span>...</span>
          <button  className={css.pagin} type='button'
          onClick={()=> setPage(page+1)}
          disabled={page===totalPages}> &gt;</button>
        </div>
      </div>
    </section>
    </div>
  )
}

export default NewsPage
