import React from "react"
import { Card, Row } from "react-bootstrap"
import "./Class.css"


const ClassCard = (props) => {
    const setClass = (evt) => {
       
        sessionStorage.setItem("class", evt.target.id)
        sessionStorage.setItem("hitDice", props.class.hitDice)
        if(sessionStorage.class === "Barbarian"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Bard"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Cleric"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Druid"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Fighter"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Monk"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Paladin"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Ranger"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Rogue"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Sorcerer"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Warlock"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }else if(sessionStorage.class === "Wizard"){
            sessionStorage.setItem("picture", "https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png")
        }
        
        props.history.push("/CharacterType")
        
    }

    return(
        <>
        
        <Card className="classCard text-center m-3" id={props.class.class} onClick={setClass}>
            <Card.Body className={`classCardBody${props.class.class} classCardBody`}id={props.class.class}>
            <div className="cardFront" id={props.class.class}>
            <Card.Title className="classCardTitleFront"id={props.class.class}>
                {props.class.class}
            </Card.Title>
            <Card.Img roundedCircle src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png"className="classCardImg"id={props.class.class}>
                
            </Card.Img>
            </div>
            <div className="cardBack" id={props.class.class}>
            <Card.Img roundedCircle src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" className="classCardImg"id={props.class.class}>
                
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