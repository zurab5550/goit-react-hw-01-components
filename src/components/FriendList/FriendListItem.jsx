import React from 'react'
import styles from './FriendListItem.module.css'

const FriendListItem = ({isOnline, avatar, name}) => {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}

export default FriendListItem