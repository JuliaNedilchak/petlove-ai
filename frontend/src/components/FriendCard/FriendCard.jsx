import css from './FriendCard.module.css';

const FriendCard = ({friend}) => {
  return (
    <li className={css.card}>
    <span className={css.workTime}>Day and night</span>
      <img className={css.logo} src={friend.imageUrl} alt={friend.title}/>
      <h2>{friend.title}</h2>
      <p>Email: {friend.email}</p>
      <p>Address: {friend.address}</p>
      <p>Phone: {friend.phone}</p>
    </li>
  )
}

export default FriendCard
