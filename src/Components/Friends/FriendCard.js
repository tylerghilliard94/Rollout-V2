import React from "react"
import {Card, Row, Image, Col } from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import "./FriendCard.css"
import {Button, Icon} from "react-materialize"



const FriendCard = props => {

    const handleFriendDelete = (evt) => {
        APIManager.Delete("friends", evt.target.id).then(() => {
            APIManager.GetUsersFriends("friends", sessionStorage.activeUserID)
        })
        .then((response) => {
            props.setFriends(response)
             
        })

        
    }

    const handleShowFriendDashboard = (evt) => {
        sessionStorage.setItem("friendId", evt.target.id)
        props.history.push("/FriendCharacters")
    }

    return (
        <>
        <Card className="FriendCardContainer">
            <Card.Body className="FriendCardBody"   >
            <Row >
            
            <Card.Text className="friendCardText"id={props.friend.id}onClick={handleShowFriendDashboard}>
            {props.friend.user.userName}
            </Card.Text>
            <Image className="angelImage" src={("../images/Brendaangel.PNG")} roundedCircle />
            <Button
              className = "delete-friend-btn blue btn-floating halfway-fab large waves-effect waves-light red "
              
              
              id={props.friend.id}
              icon={<Icon>delete</Icon>}
            
             
              onClick={handleFriendDelete}
              type="submit"
            >
                 
            </Button>
            
            
             
            
           
            </Row>
            </Card.Body>
        </Card>
        
        </>

    )
}

export default FriendCard