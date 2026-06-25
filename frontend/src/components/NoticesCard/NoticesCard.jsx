import React from 'react'

const NoticesCard = ({pet}) => {
  return (
    <li>
    <img width='315' src={pet.imgURL}/>
    <h2>{pet.title}</h2>
    <p>{pet.popularity}</p>
    <div>
    <p>name {pet.name}</p>
    <p>birthday {pet.birthday}</p>
    <p>sex {pet.sex}</p>
        <p> species {pet.species}</p>
        <p> category {pet.category}</p>
        </div>
        <p>{pet.comment}</p>
        <p>{pet.price}</p>
        <button type='button'>Learn more</button>
    </li>
  )
}

export default NoticesCard
