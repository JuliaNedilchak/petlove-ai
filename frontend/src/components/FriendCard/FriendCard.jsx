

const FriendCard = ({friend}) => {
  return (
    <li>
      <img src={friend.imageUrl} alt={friend.title}/>
      <h2>{friend.title}</h2>
      <p>Email: {friend.email}</p>
      <p>Address: {friend.address}</p>
      <p>Phone: {friend.phone}</p>
    </li>
  )
}

export default FriendCard
