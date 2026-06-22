import React from 'react'

const NewsCard = ({newsItem}) => {
  return (
    <li>
<span>
   <p>{newsItem.title}</p>
   <p>{newsItem.text}</p>
</span>
    </li>
  )
}

export default NewsCard
