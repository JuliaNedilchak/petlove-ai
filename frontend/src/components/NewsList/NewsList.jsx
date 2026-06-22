import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

const NewsList = ({news}) => {
  return (
    <ul>
        {news.map(newsItem=>(
<NewsCard key={newsItem._id}
    newsItem={newsItem}
/>
        ))}
    </ul>
  )
}

export default NewsList
