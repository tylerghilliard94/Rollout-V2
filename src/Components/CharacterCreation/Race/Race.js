import React from "react"
import {useEffect, useState} from "react"
import APIManager from "../../Modules/APIManager"
import RaceCard from "./RaceCard"
import "./Race.css"
import { Card, Row, Col, Container } from "react-bootstrap"


const Race = props => {
    const [races, setRaces] = useState([])

    useEffect(() => {
        APIManager.GetAll("races").then((response) => setRaces(response))
    }, [])

    
    return (
        <div className="raceContainer">
          
           
           <Container className="raceCardContainer">
            {races.map(characterRace => 
                <RaceCard race={characterRace} key={characterRace.race}  {...props} />   )}
             </Container>
          
          
        </div>
    )
}

export default Race