import React from "react"
import { Card, Row } from "react-bootstrap"
import "./Class.css"


const ClassCard = (props) => {
    const setClass = (evt) => {
       
        sessionStorage.setItem("class", evt.target.id)
        sessionStorage.setItem("hitDice", props.class.hitDice)
        props.history.push("/CharacterType")
        
    }

    return(
        <>
        
        <Card className="classCard text-center m-3" id={props.class.class} onClick={setClass}>
            <Card.Body className="classCardBody"id={props.class.class}>
            <div className="cardFront" id={props.class.class}>
            <Card.Title className="classCardTitleFront"id={props.class.class}>
                {props.class.class}
            </Card.Title>
            <Card.Img className="classCardImg"id={props.class.class}>
                
            </Card.Img>
            </div>
            <div className="cardBack" id={props.class.class}>
            <Card.Img className="classCardImg"id={props.class.class}>
                
            </Card.Img>
            <Card.Title className="classCardTitleBack"id={props.class.class}>
                {props.class.class}
            </Card.Title>
            <p className="cardDescription"id={props.class.class}>
            {props.class.description}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default ClassCard