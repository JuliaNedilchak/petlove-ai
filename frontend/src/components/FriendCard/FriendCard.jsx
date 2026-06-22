import css from './FriendCard.module.css';

const FriendCard = ({friend}) => {
  return (
    <li className={css.card}>
    <span className={css.workTime}>Day and night</span>
    <div className={css.friendsInfo}>
      <img className={css.logo} src={friend.imageUrl} alt={friend.title}/>
      <div className={css.friendsName}>
      <h2>{friend.title}</h2>
      <p>Email: {friend.email}</p>
      <p>Address: {friend.address}</p>
      <p>Phone: {friend.phone}</p>
      </div>
      </div>
    </li>
  )
}

export default FriendCard
