import React, {useEffect} from "react"
import APIManager from "../../Modules/APIManager"

import {Card, Row, ProgressBar} from "react-bootstrap"
import "./CharacterType.css"

const CharacterType = props => {

let defaultChoice = {}

    useEffect(() => {
        
        
        APIManager.GetDefaultbyClass("defaultCharacters", sessionStorage.class).then((response) => {
            defaultChoice = response;
           
        })
    }, [])

    const handleDefault = (evt) => {
        console.log(defaultChoice)
        defaultChoice[0].userId = parseInt(sessionStorage.activeUserID)
        delete defaultChoice[0].id
        APIManager.Post("characters", defaultChoice[0]).then(()=> {
            props.history.push("/Dashboard")
        })
        
    }

    const handleCustom = (evt) => [
        props.history.push("/Race")
    ]
    return (
        <div className="choiceContainer">
            <ProgressBar className="characterCreationProgress" animated variant="danger" now="14" ></ProgressBar>
            <Row>
        <div className="defaultChoiceContainer">
        <Card className="defaultCard text-center" id={sessionStorage.class} onClick={handleDefault}>
            <Card.Body className="defaultCardBody"id={sessionStorage.class}>
            <div className="defaultFront" id={sessionStorage.class}>
            <Card.Title className="defaultCardTitleFront"id={sessionStorage.class}>
                Default Character
            </Card.Title>
            <Card.Img className="defaultCardImg"id={sessionStorage.class}>
                
            </Card.Img>
            </div>
            <div className="defaultBack" id={sessionStorage.class}>
            <Card.Img className="defaultCardImg"id={sessionStorage.class}>
                
            </Card.Img>
            <Card.Title className="defaultCardTitleBack"id={sessionStorage.class}>
                Default Character
            </Card.Title>
            <p className="defaultCardDescription"id={sessionStorage.class}>
            Recommended for players who already have some experience or if you need to hop into a game right away.
            </p>
            
            </div>
            </Card.Body>
        </Card>
        </div>
        <div className="orTitle">
        <p>
            OR
        </p>
        </div>
        <div className="defaultChoiceContainer">
        <Card className="customCard text-center" id={sessionStorage.class} onClick={handleCustom}>
            <Card.Body className="customCardBody"id={sessionStorage.class}>
            <div className="customFront" id={sessionStorage.class}>
            <Card.Title className="customCardTitleFront"id={sessionStorage.class}>
                Custom Character
            </Card.Title>
            <Card.Img className="customCardImg"id={sessionStorage.class}>
                
            </Card.Img>
            </div>
            <div className="customBack" id={sessionStorage.class}>
            <Card.Img className="customCardImg"id={sessionStorage.class}>
                
            </Card.Img>
            <Card.Title className="customCardTitleBack"id={sessionStorage.class}>
                Custom Character
            </Card.Title>
            <p className="customCardDescription"id={sessionStorage.class}>
            Recommended for those new to the game or those looking to create a character piece by piece.
            </p>
            
            </div>
            </Card.Body>
        </Card>
        
        </div>
        </Row>
        </div>
    )
}

export default CharacterType
