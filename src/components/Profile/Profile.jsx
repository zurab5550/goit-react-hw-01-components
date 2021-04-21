import React from 'react'
import PropTypes from 'prop-types'
import styles from './Profile.module.css'


function Profile({name, tag, location, avatar, stats}) {
    return <>
    <div className={styles.profile}>
  <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
    <p className={styles.name}>{name}</p>
    <p className="tag">{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    
    </>
}

export default Profile

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}