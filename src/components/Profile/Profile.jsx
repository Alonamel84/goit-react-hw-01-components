
import PropTypes from 'prop-types';
import s from './Profile.module.css'
const Profile = ({ name, avatar, tag, location, stats }) => {
    const statistical = Object.entries(stats).map(([key, value]) =>
        <li className={ s.statisticsList} key = {key} >
            <span className={s.label}>{key}</span>
            <span className={s.quantity}>{value}</span>
        </li>);
    
    return (<div className={s.profile}>
        <div className={s.description}>
            <img 
                src={avatar}
                alt="Аватар пользователя"
                 className={s.avatarPhoto}
                />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
            </div>

        <ul className={s.stats}>
            { statistical}
            </ul>
        </div>)
};
Profile.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;