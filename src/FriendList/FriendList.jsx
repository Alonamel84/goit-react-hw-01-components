
import s from './FriendList.module.css';
import FriendItem from "./FriendItem/FriendItem";
const FriendList = ({ friends }) => {
    
    return (
        <ul className={ s.friendList}>
            {friends.map(item => <FriendItem name={item.name} avatar={item.avatar} isOnline={item.isOnline} key={ item.id}/>)}
      </ul>
    )
};
export default FriendList;