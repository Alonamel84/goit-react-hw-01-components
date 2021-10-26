
const Profile = ({ name, avatar, tag, location, stats }) => {
    const statistical = Object.entries(stats).map(([key, value]) =>
        <li key = {key} >
            <span className="label">{key}</span>
            <span className="quantity">{value}</span>
        </li>);
    
    return ( <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

        <ul className="stats">
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