import PropTypes from 'prop-types';
import s from './FriendItem.module.css';
const FriendItem = ({ avatar, name, isOnline,id }) => {
   
    return (
        <li className={s.item} style={{listStyle:'none'}}>
            <span className={isOnline? s.statusOnline : s.statusOffline}> </span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
};
    
FriendItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number,

}
export default FriendItem;