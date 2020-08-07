import React, {useEffect, useState} from "react"
import {Row, Card, Button, SplitButton,ProgressBar} from "react-bootstrap"
import "./HitPoints.css"

const HitPoints = props => {
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        if(sessionStorage.level == 1){
        let bonusSplit = sessionStorage.constitutionBonus
        bonusSplit = bonusSplit.split(" ")[1]
        let hitTotal = parseInt(sessionStorage.hitDice) + parseInt(bonusSplit)
        sessionStorage.setItem("hitPoints", hitTotal)
        }else{
            let bonusSplit = sessionStorage.constitutionBonus
            bonusSplit = bonusSplit.split(" ")[1]
            let safeHitTotal = parseInt(sessionStorage.hitDice) + parseInt(bonusSplit)
            let safeHit = sessionStorage.hitDice / 2
            
            let chanceHitTotal = parseInt(safeHitTotal)
           

            for(let i = 2; i <= sessionStorage.level; i++){
                safeHitTotal += parseInt(safeHit)
                safeHitTotal += parseInt(bonusSplit)
            }

            for(let i = 2; i <= sessionStorage.level; i++){
                chanceHitTotal += Math.ceil(Math.random() * parseInt(sessionStorage.hitDice))
                chanceHitTotal += parseInt(bonusSplit)
            }
            sessionStorage.setItem("hitPoints", safeHitTotal)
            sessionStorage.setItem("chanceHitPoints", chanceHitTotal)

        }
        setRefresh(true)
    }, [])

    const handleShow = (evt) => {
        document.getElementById(`${evt.target.id}`).className +=' animation';
    }
    const handleShowSafe = () => {
        document.getElementById(`safe`).className +=' animation';
        
    }
    const handleShowChance = (evt) => {
        document.getElementById(`${evt.target.id}`).className +=' animation';
        sessionStorage.setItem("hitPoints", sessionStorage.chanceHitPoints)
        handleShowSafe()
       
        sessionStorage.removeItem("chanceHitPoints")
    }
    const handleNext = (evt) => {
        
        props.history.push("/FinalDetails")
        sessionStorage.removeItem("chanceHitPoints")
    }

    if(sessionStorage.level == 1) {

    
    return(
        <>
        
        
        <ProgressBar className="characterCreationProgress" animated variant="danger" now="75" ></ProgressBar>
        <Row>
        
            <Card className="hitCard text-center m-3" >
            <Card.Body className="hitCardBody"id="default">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Default Hit Points
            </Card.Title>
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <p className="cardDescription">
                At level one your health is set to your classes hit dice plus your Constitution modifier which is {sessionStorage.constitutionBonus}.
                
            </p>
            </div>
            <div className="cardBack" >
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <Card.Title className="hitCardTitleBack">
                Hit Points
            </Card.Title>
            <p className="hitPointDescription">
            {sessionStorage.hitPoints}
            </p>
            
            </div>
            </Card.Body>
        </Card>

        </Row>
        <Row>
            <Button 
            className="showButton"
            variant="custom" 
            type="submit"
            id="default"
            onClick={handleShow}
            >
              Show
            </Button>
        </Row>
        
        </>
    )
    }else{
        return(
            <>
           
            <ProgressBar className="characterCreationProgress" animated variant="danger" now="75" ></ProgressBar>
            <Row>
            
            <Card className="hitCard text-center m-3" >
            <Card.Body className="hitCardBody"id="safe">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Safe Hit Point Choice
            </Card.Title>
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <p className="cardDescription">
                {sessionStorage.hitPoints}
            </p>
            </div>
            
            </Card.Body>
        </Card>
            <p className="orTitle">
                OR
            </p>
        <Card className="hitCard text-center m-3" >
            <Card.Body className="hitCardBody2"id="chance">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Risky Hit Point Choice
            </Card.Title>
            <Card.Img className="hitCardImg">
                
            </Card.Img>
           
            </div>
            <div className="cardBack" >
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <Card.Title className="hitCardTitleBack">
                Hit Points
            </Card.Title>
            <p className="hitPointDescription">
            {sessionStorage.chanceHitPoints}
            </p>
            
            </div>
            
            </Card.Body>
        </Card>
        
            <Button 
            className="showButton"
            variant="custom" 
            type="submit"
            id="next"
            onClick={handleNext}
            >
              Next
            </Button>
        </Row>
        <Row>
        
            <Button 
            className="showButton"
            variant="custom" 
            type="submit"
            id="chance"
            onClick={handleShowChance}
            >
              Choose Risky Choice
            </Button>
        </Row>
        
        </>
        )
    }

}

export default HitPoints