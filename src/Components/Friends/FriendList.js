import React, { useState, useEffect } from 'react';
import APIManager from "../Modules/APIManager"
import {NewFriend} from "./FriendModal"
import FriendCard from "./FriendCard"

import "./FriendList.css"

const FriendsList = props => {
    const [friends, setFriends] = useState([])
    const [refresh, setRefresh] = useState()
    const friendUpdate = () => {
        APIManager.GetUsersFriends("friends")
        .then((response) => {
           
            setFriends(response)
            props.newFriends(response)
        })}

    useEffect(() => {
       friendUpdate()
        }, [refresh])

    return (
    <div className="friend-container">
        <h3>Friend's List</h3>
        <NewFriend friendUpdate={friendUpdate} newFriends={props.newFriends} />

    <div className="friend-card-container">
        {friends.map(friend => 
            <FriendCard key={friend.id} friend={friend} setFriends={friendUpdate}{...props} />
        )}

    </div>
    </div>
    )
}
export default FriendsList