import React from 'react'
import css from './NewsCard.module.css'

const NewsCard = ({newsItem}) => {
  return (
    <li className={css.card}>

<img className={css.image} src={newsItem.imgUrl}/>
   <p className={css.title}>{newsItem.title}</p>
   <p className={css.text}>{newsItem.text}</p>
   <div className={css.lowerPart}>
   <p>{new Date(newsItem.date). toLocaleDateString()}</p>
<a className={css.readMore} href={newsItem.url}
target='_blank'
rel='noopener noreferrer'> read more</a>
</div>
    </li>
  )
}

export default NewsCard
