import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import css from './NewsList.module.css'

const NewsList = ({news}) => {
  return (
    <ul className={css.newsList}>
        {news.map(newsItem=>(
<NewsCard key={newsItem._id}
    newsItem={newsItem}
/>
        ))}
    </ul>
  )
}

export default NewsList
