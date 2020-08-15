import React from "react"
import { Card, Row } from "react-bootstrap"
import "./Class.css"


const ClassCard = (props) => {
    const setClass = (evt) => {
       
        sessionStorage.setItem("class", evt.target.id)
        sessionStorage.setItem("hitDice", props.class.hitDice)
        if(sessionStorage.class === "Barbarian"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596825622/barbarian-logo_wte4dq.png")
        }else if(sessionStorage.class === "Bard"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Bard-Logo_w2z8tj.png")
        }else if(sessionStorage.class === "Cleric"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Cleric-Logo_u98prn.png")
        }else if(sessionStorage.class === "Druid"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Druid-Logo_qsidvz.png")
        }else if(sessionStorage.class === "Fighter"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596945398/Fighter-logo_wmjqmr.png")
        }else if(sessionStorage.class === "Monk"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596929822/monk-logo_rgqgyq.png")
        }else if(sessionStorage.class === "Paladin"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Paladin-Logo_fnbeee.png")
        }else if(sessionStorage.class === "Ranger"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Ranger-Logo_fx5hh3.png")
        }else if(sessionStorage.class === "Rogue"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Rogue-Logo_s160v1.png")
        }else if(sessionStorage.class === "Sorcerer"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596776710/Sorcerer-Logo_bp3j1f.png")
        }else if(sessionStorage.class === "Warlock"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596776706/Warlock-Logo-Light_fz9esl.png")
        }else if(sessionStorage.class === "Wizard"){
            sessionStorage.setItem("picture", "http://res.cloudinary.com/dgllrw1m3/image/upload/v1597455011/Wizard-Logo_wegm2e.png")
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
            <Card.Img roundedCircle src={props.class.picture}className="classCardImg"id={props.class.class}>
                
            </Card.Img>
            </div>
            <div className="cardBack" id={props.class.class}>
            <Card.Img roundedCircle src={props.class.picture} className="classCardImg"id={props.class.class}>
                
            </Card.Img>
            <Card.Title className="classCardTitleBack"id={props.class.class}>
                {props.class.class}
            </Card.Title>
            <p className="cardDescriptionClass"id={props.class.class}>
            {props.class.description}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default ClassCard