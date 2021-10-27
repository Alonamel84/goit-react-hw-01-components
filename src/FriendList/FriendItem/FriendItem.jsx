import s from './FriendItem.module.css';
const FriendItem = ({ avatar, name, isOnline }) => {
   
    return (
        <li className={s.item} style={{listStyle:'none'}}>
            <span className={isOnline? s.statusOnline : s.statusOffline}> </span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name" style={{ color: 'blue' ,fontSize:20, fontWeight:'bold'}}>{name}</p>
        </li>
    )
};
    

export default FriendItem;