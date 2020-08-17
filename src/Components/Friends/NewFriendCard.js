import React, {useState} from "react"
import {Card, Button,  Row, Col, Image} from "react-bootstrap"
import APIManager from "../Modules/APIManager"

import "./NewFriendCard.css"


const NewFriendCard = props => {
    const [newFriend, setNewFriend] = useState({userId: 0, activeUserId: parseInt(sessionStorage.activeUserID), })
    let update = props.friendUpdate
    const handleFriendAdd = (evt) => {
        newFriend.userId = parseInt(evt.target.id)
        APIManager.Post("friends", newFriend).then(() => {
            APIManager.GetAll("users").then((response) => props.setFriends(response)).then(() => {
                APIManager.GetUsersFriends("friends").then((response) => props.setNewFriends(response)).then(() => props.setFilterFriends([]))
                .then(() => update()).then(() => props.clear).then(() => props.newFriends())
                
            })
        })
    }
   
    if(sessionStorage.activeUserID != props.friend.userName){

    
    return (
        <>
         <Card className="FriendCardContainer">
            <Card.Body className="FriendCardBody"   >
            <Row className="friendCardRowNew" >
                <Col className="friendCol" sm={3}>
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
            </Col>
            <Col className="friendCol" sm={6}>
            <Card.Text className="friendCardText">
            {props.friend.userName}
            </Card.Text>
            
            </Col>
            <Col className="friendCol" sm={2}>
            <Button
              className = "addNew-friend-btn blue large red "
              
              
              id={props.friend.id}
              onClick={handleFriendAdd}
          
               
             
             
              type="button"
            >
              +
            </Button>
            </Col>
            
             
            
           
            </Row>
            </Card.Body>
        </Card>
        
        


        </>

    )
    }
    
}

export default NewFriendCard