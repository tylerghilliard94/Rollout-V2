import React from "react"
import { Card, Row } from "react-bootstrap"
import "./Race.css"


const RaceCard = (props) => {
    const setRace = (evt) => {
       
        sessionStorage.setItem("race", evt.target.id)
        props.history.push("/BaseInfo")
        
    }

    return(
        <>
        
        <Card className="raceCard text-center m-3" id={props.race.race} onClick={setRace}>
            <Card.Body className="raceCardBody"id={props.race.race}>
            <div className="cardFront" id={props.race.race}>
            <Card.Title className="raceCardTitleFront"id={props.race.race}>
                {props.race.race}
            </Card.Title>
            <Card.Img src="https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" className="raceCardImg"id={props.race.race}>
                
            </Card.Img>
            </div>
            <div className="cardBack" id={props.race.race}>
            <Card.Img src="https://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" className="raceCardImg"id={props.race.race}>
                
            </Card.Img>
            <Card.Title className="raceCardTitleBack"id={props.race.race}>
                {props.race.race}
            </Card.Title>
            <p className="cardDescriptionRace"id={props.race.race}>
            {props.race.description}<br></br><br></br>
            {props.race.statBonus}
            </p>
           
            
            </div>
            </Card.Body>
        </Card>
        
        </>
    )
}

export default RaceCard