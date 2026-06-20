
import FriendCard from '../FriendCard/FriendCard'
import css from './FriendsList.module.css'

const FriendsList = ({friends}) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend =>(
        <FriendCard key={friend._id}
        friend={friend}/>
      ))}
    </ul>
  )
}

export default FriendsList
