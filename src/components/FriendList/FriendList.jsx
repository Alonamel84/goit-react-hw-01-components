import PropTypes from 'prop-types';

import s from './FriendList.module.css';
import FriendItem from "../FriendList/FriendItem/FriendItem";
const FriendList = ({ friends }) => {
    
    return (
        <ul className={ s.friendList}>
            {friends.map(item => <FriendItem name={item.name} avatar={item.avatar} isOnline={item.isOnline} key={ item.id}/>)}
      </ul>
    )
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}


export default FriendList;
