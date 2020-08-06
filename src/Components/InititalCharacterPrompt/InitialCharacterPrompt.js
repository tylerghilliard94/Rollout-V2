import React, {useState} from "react"
import { Button, Col, Row, Image } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import BaseNavBar from "../NavBar/BaseNavBar"
import FriendsList from "../Friends/FriendList"
import "./InitialCharacterPrompt.css"

const InitialCharacterPrompt = props => {
    const handleNewCharacter = () => {
        props.history.push("/Class")
    }

    return (
        <>
            <div className="navBar">
                <BaseNavBar {...props} />
            </div>
            <Row className="mainRow">
                <Col sm={9}>
                <Image  className="initialPromptImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596404968/Role_Out_D_ygzjys.png">

                </Image>
                <h2 className="initialPromptTitle"> Let's get started on your adventure!</h2>
                <Button onClick={handleNewCharacter} className="initialPromptButton">
                <storng>Create a Character</storng>
                </Button>
                </Col>
                
                
            </Row>
            </>
    )
}

export default InitialCharacterPrompt