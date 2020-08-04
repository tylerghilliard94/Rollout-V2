import React from "react"
import {useEffect, useState} from "react"
import APIManager from "../../Modules/APIManager"
import RaceCard from "./RaceCard"
import "./Race.css"
import { Card, Row, Col, Container, ProgressBar } from "react-bootstrap"


const Race = props => {
    const [races, setRaces] = useState([])

    useEffect(() => {
        APIManager.GetAll("races").then((response) => setRaces(response))
    }, [])

    
    return (
        <div className="raceContainer">
          
          <ProgressBar className="characterCreationProgress" animated variant="danger" now="28" ></ProgressBar>
           <h1 className="raceTitle"> Choose a Race</h1>
           <Container className="raceCardContainer">
            {races.map(characterRace => 
                <RaceCard race={characterRace} key={characterRace.race}  {...props} />   )}
             </Container>
          
          
        </div>
    )
}

export default Race