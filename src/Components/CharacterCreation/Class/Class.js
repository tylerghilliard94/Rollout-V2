import React from "react"
import {useEffect, useState} from "react"
import APIManager from "../../Modules/APIManager"
import ClassCard from "./ClassCard"
import "./Class.css"
import { Card, Row, Col, Container, ProgressBar } from "react-bootstrap"
import BaseNavBar from "../../NavBar/BaseNavBar"


const CharacterCreation = props => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        APIManager.GetAll("classes").then((response) => setClasses(response))
    }, [])

    
    return (
        <>
        <BaseNavBar />
        <Col className="classContainer">
          
         
      
       
        <ProgressBar className="characterCreationProgressClass" animated variant="danger" now="5" ></ProgressBar>
        <h1 className="classTitle">Choose a Class</h1>
   
           <Container className="classCardContainer">
            {classes.map(characterClass => 
                <ClassCard class={characterClass} key={characterClass.class}  {...props} />   )}
             </Container>
          
          
        </Col>
        </>
    )
}

export default CharacterCreation