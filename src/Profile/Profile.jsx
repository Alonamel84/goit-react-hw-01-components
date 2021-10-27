import s from './Profile.module.css'
const Profile = ({ name, avatar, tag, location, stats }) => {
    const statistical = Object.entries(stats).map(([key, value]) =>
        <li className={ s.statisticsList} key = {key} >
            <span className={s.label}>{key}</span>
            <span className={s.quantity}>{value}</span>
        </li>);
    
    return ( <div className="profile">
            <div className="description">
            <img 
                src={avatar}
                alt="Аватар пользователя"
                className="avatar"
                style={{ display: 'block' ,width: 120, height:120, padding:20}}
                />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
            </div>

        <ul className={s.stats}>
            { statistical}
                {/* <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li> */}
            </ul>
        </div>)



};
export default Profile;