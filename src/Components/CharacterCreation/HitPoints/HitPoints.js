import React, {useEffect, useState} from "react"
import {Row, Card, Button, SplitButton,ProgressBar, Col} from "react-bootstrap"
import "./HitPoints.css"
import BaseNavBar from "../../NavBar/BaseNavBar"

const HitPoints = props => {
    const [refresh, setRefresh] = useState(false)
    
    useEffect(() => {
        if(sessionStorage.level == 1){
        let bonusSplit = sessionStorage.constitutionBonus
        bonusSplit = bonusSplit.split(" ")[1]
        let hitTotal = 0
        if(sessionStorage.constitutionBonus.split(" ")[0] === "+"){
            hitTotal = parseInt(sessionStorage.hitDice) + parseInt(bonusSplit)
        }else{
            hitTotal = parseInt(sessionStorage.hitDice) - parseInt(bonusSplit)
        }
        
        sessionStorage.setItem("hitPoints", hitTotal)
        }else{
            let bonusSplit = sessionStorage.constitutionBonus
            bonusSplit = bonusSplit.split(" ")[1]
            let safeHitTotal = 0
            if(sessionStorage.constitutionBonus.split(" ")[0] === "+"){
            safeHitTotal = parseInt(sessionStorage.hitDice) + parseInt(bonusSplit)
            }else{
                safeHitTotal = parseInt(sessionStorage.hitDice) - parseInt(bonusSplit)
            }
            
            let safeHit = sessionStorage.hitDice / 2
            
            let chanceHitTotal = parseInt(safeHitTotal)
           

            for(let i = 2; i <= sessionStorage.level; i++){
                safeHitTotal += parseInt(safeHit)
                safeHitTotal += parseInt(bonusSplit)
            }

            for(let i = 2; i <= sessionStorage.level; i++){
                chanceHitTotal += Math.ceil(Math.random() * parseInt(sessionStorage.hitDice))
                if(sessionStorage.constitutionBonus.split(" ")[0] === "+"){
                    chanceHitTotal += parseInt(bonusSplit)
                }else{
                    chanceHitTotal -= parseInt(bonusSplit)
                }
                
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
        sessionStorage.hitPoints = sessionStorage.chanceHitPoints
        handleShowSafe()
       
       
    }
    const handleNext = (evt) => {
        
        props.history.push("/FinalDetails")
        sessionStorage.removeItem("chanceHitPoints")
        
    }
    const handleBack = (evt) => {
        
        props.history.push("/Stats")
        sessionStorage.removeItem("chanceHitPoints")
        
    }

    if(sessionStorage.level == 1) {

    
    return(
        <>
        <BaseNavBar />
        
        <ProgressBar className="characterCreationProgress" animated variant="danger" now="75" ></ProgressBar>
        <h1 className="hitPointsTitle">Hit Points</h1>
        <Row>
        <Col sm={2}>
        <div onClick={handleBack} class="arrowBack"></div>
        </Col>
        <Col sm={8}>
        <Row className="hitCardDefaultRow">
        
            <Card className="hitCardDefault text-center m-3" >
            <Card.Body className={`hitCardBody${sessionStorage.class}`}id="default">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Default Hit Points
            </Card.Title>
            <Card.Img src={sessionStorage.picture} className="hitPointCardImg">
                
            </Card.Img>
            <p className="cardDescription">
                At level one your health is set to your classes hit dice plus your Constitution modifier which is {sessionStorage.constitutionBonus}.
                
            </p>
            </div>
            <div className="cardBack" >
            <Card.Img src={sessionStorage.picture}className="hitPointCardImgBack">
                
            </Card.Img>
            <Card.Title className="hitCardTitleBack">
                <strong>Hit Points</strong>
            </Card.Title>
            <p className="hitPointDescriptionNumber">
            {sessionStorage.hitPoints}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        
        </Row>
        <Row>
            <Button 
            className="showButtonDefault"
            variant="custom" 
            type="submit"
            id="default"
            onClick={handleShow}
            >
              Show
            </Button>
        </Row>
        </Col>
        <Col sm={2}>
        <div onClick={handleNext} class="arrowNext"></div>
        </Col>
        </Row>
        </>
    )
    }else{
        return(
            <>
           <BaseNavBar />
            <ProgressBar className="characterCreationProgress" animated variant="danger" now="75" ></ProgressBar>
            <h1 className="hitPointsTitle">Hit Points</h1>
            <Row>
            <Col className="backBtnCol" sm={2}>
            <div onClick={handleBack} class="arrowBackHitPoints"></div>
            </Col>
            <Col className="hitPointCol" sm={6}>
            <Row className="hitPointRow">
            
            
            <Card className="hitCard text-center m-3" >
            <Card.Body className={`hitCardBody${sessionStorage.class}`}id="safe">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Safe Hit Point Choice
            </Card.Title>
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <p className="cardDescriptionNumber">
                {sessionStorage.hitPoints}
            </p>
            <p className="hitPointDescription"> Default Choice <br></br> This takes the average of your hit die and adds your Constitution Bonus for each level over 1.</p>
            </div>
            <div className="cardBack" >
            <Card.Img src={sessionStorage.picture} className="hitPointCardImgBack">
                
                </Card.Img>
            <Card.Title className="hitCardTitleBack">
                Good Luck!
            </Card.Title>
          
            
            </div>
            </Card.Body>
        </Card>
            <p className="orTitleHitPoints">
                OR
            </p>
        <Card className="hitCard text-center m-3" >
            <Card.Body className={`hitCardBody2${sessionStorage.class}`}id="chance">
            <div className="cardFront" >
            <Card.Title className="hitCardTitleFront">
                Risky Hit Point Choice
            </Card.Title>
            <Card.Img src={sessionStorage.picture} className="hitPointCardImg">
                
            </Card.Img>
            <p className="hitPointDescription"> This choice rolls your class's hit die for each level over one and adds your Constitution Bonus. Result may vary.</p>
            
           
            </div>
            <div className="cardBack" >
            <Card.Img className="hitCardImg">
                
            </Card.Img>
            <Card.Title className="hitCardTitleBack">
                Hit Points
            </Card.Title>
            <p className="hitPointDescriptionNumber">
            {sessionStorage.chanceHitPoints}

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
            id="chance"
            onClick={handleShowChance}
            >
              <strong id="chance" onClick={handleShowChance}>Take a Chance</strong>
            </Button>
        </Row>
        </Col>
        <Col className="nextBtnCol" sm={2}>
        <div onClick={handleNext} class="arrowNextHitPoints"></div>
        </Col>
        </Row>
        </>
        )
    }

}

export default HitPoints