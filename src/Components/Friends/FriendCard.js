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
            <Row className="friendCardRow" >
                <Col className="friendCol" sm={3}>
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
            </Col>
            <Col className="friendCol" sm={6}>
            <Card.Text className="friendCardText"id={props.friend.id}onClick={handleShowFriendDashboard}>
            {props.friend.user.userName}
            </Card.Text>
            
            </Col>
            <Col className="friendCol" sm={2}>
            <Button
              className = "delete-friend-btn blue  large red "
              
              
              id={props.friend.id}
              onClick={handleFriendDelete}
              icon={<Icon>delete</Icon>}
               
             
             
              type="submit"
            >
                 
            </Button>
            </Col>
            
             
            
           
            </Row>
            </Card.Body>
        </Card>
        
        </>

    )
}

export default FriendCard