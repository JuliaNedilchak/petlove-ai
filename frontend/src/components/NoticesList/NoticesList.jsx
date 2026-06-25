import React from 'react'
import NoticesCard from '../NoticesCard/NoticesCard'
import css from './NoticesList.module.css'

const NoticesList = ({pets}) => {
  return (
   <ul className={css.cardList}>
    {pets.map(pet=>(
        <NoticesCard key={pet._id}
            pet={pet}
        />
    ))}
   </ul>
  )
}

export default NoticesList
