
import FriendCard from '../FriendCard/FriendCard'

const FriendsList = ({friends}) => {
  return (
    <ul>
      {friends.map(friend =>(
        <FriendCard key={friend._id}
        friend={friend}/>
      ))}
    </ul>
  )
}

export default FriendsList
