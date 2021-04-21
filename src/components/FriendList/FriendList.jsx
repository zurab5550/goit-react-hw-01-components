import React from 'react'
import FriendListItem from "./FriendListItem"
import styles from './FriendList.module.css'

function FriendList({ friends }) {
    const friendElements = friends.map(item => (
        <FriendListItem key={item.id} {...item} />
        ))
    return (
        <ul className={styles.friendList}>
            {friendElements}
        </ul>
    )
}


export default FriendList
