import React from "react"
import {useEffect, useState} from "react"
import APIManager from "../../Modules/APIManager"
import ClassCard from "./ClassCard"
import "./Class.css"
import { Card, Row, Col, Container, ProgressBar } from "react-bootstrap"


const CharacterCreation = props => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        APIManager.GetAll("classes").then((response) => setClasses(response))
    }, [])

    
    return (
        <div className="classContainer">
          
          <div className="text-center">Plain</div>
      
        
        <ProgressBar className="characterCreationProgress" animated variant="danger" now="0" ></ProgressBar>
   
           <Container className="classCardContainer">
            {classes.map(characterClass => 
                <ClassCard class={characterClass} key={characterClass.class}  {...props} />   )}
             </Container>
          
          
        </div>
    )
}

export default CharacterCreation