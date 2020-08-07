import React, {useEffect, useState} from "react"
import {Card, Button, Row, ProgressBar, Col} from "react-bootstrap"
import "./Stats.css"
import BaseNavBar from "../../NavBar/BaseNavBar"



const Stats = props => {
    
    const [stats, setStats] = useState(false)    


    useEffect(() => {
        sessionStorage.setItem("rollStrength", Math.ceil(Math.random() * 20))
        sessionStorage.setItem("rollDexterity", Math.ceil(Math.random() * 20))
        sessionStorage.setItem("rollConstitution", Math.ceil(Math.random() * 20))
        sessionStorage.setItem("rollIntelligence", Math.ceil(Math.random() * 20))
        sessionStorage.setItem("rollWisdom", Math.ceil(Math.random() * 20))
        sessionStorage.setItem("rollCharisma", Math.ceil(Math.random() * 20))

        if(parseInt(sessionStorage.rollStrength) < 10) {
            sessionStorage.setItem("rollStrength", Math.ceil(Math.random() * 20))
            if(parseInt(sessionStorage.rollStrength) < 10) {
                sessionStorage.setItem("rollStrength", Math.ceil(Math.random() * 20))
            }
        }

        if(parseInt(sessionStorage.rollDexterity) < 10) {
            sessionStorage.setItem("rollDexterity", Math.ceil(Math.random() * 20))
            if(parseInt(sessionStorage.rollDexterity) < 10) {
                sessionStorage.setItem("rollDexterity", Math.ceil(Math.random() * 20))
            }
        }

        if(sessionStorage.rollConstitution < 10) {
            sessionStorage.setItem("rollConstitution", Math.ceil(Math.random() * 20))
            if(sessionStorage.rollConsitution < 10) {
                sessionStorage.setItem("rollConstitution", Math.ceil(Math.random() * 20))
            }
        }
        
        if(parseInt(sessionStorage.rollIntelligence) < 10) {
            sessionStorage.setItem("rollIntelligence", Math.ceil(Math.random() * 20))
            if(parseInt(sessionStorage.rollIntelligence) < 10) {
                sessionStorage.setItem("rollIntelligence", Math.ceil(Math.random() * 20))
            }
        }

        if(sessionStorage.rollWisdom < 10) {
            sessionStorage.setItem("rollWisdom", Math.ceil(Math.random() * 20))
            if(sessionStorage.rollWisdom < 10) {
                sessionStorage.setItem("rollWisdom", Math.ceil(Math.random() * 20))
            }
        }

        if(parseInt(sessionStorage.rollCharisma) < 10) {
            sessionStorage.setItem("rollCharisma", Math.ceil(Math.random() * 20))
            if(parseInt(sessionStorage.rollCharisma) < 10) {
                sessionStorage.setItem("rollCharisma", Math.ceil(Math.random() * 20))
            }
        }
        if(sessionStorage.race === "Dragonborn"){
            sessionStorage.rollStrength = parseInt(sessionStorage.rollStrength) + 2
            sessionStorage.rollCharisma = parseInt(sessionStorage.rollCharisma) + 1
        }else if(sessionStorage.race === "Dwarf"){
            sessionStorage.rollConstitution = parseInt(sessionStorage.rollConstitution) + 2
        }else if(sessionStorage.race === "Elf"){
            sessionStorage.rollDexterity = parseInt(sessionStorage.rollDexterity) + 2
        } else if(sessionStorage.race === "Gnome"){
            sessionStorage.rollIntelligence = parseInt(sessionStorage.rollIntelligence) + 2
        } else if(sessionStorage.race === "Half-Elf"){
            sessionStorage.rollCharisma = parseInt(sessionStorage.rollCharisma) + 2
            sessionStorage.rollDexterity = parseInt(sessionStorage.rollDexterity) + 1
            sessionStorage.rollConstitution = parseInt(sessionStorage.rollConstitution) + 1
        }else if(sessionStorage.race === "Halfling"){
            sessionStorage.rollDexterity = parseInt(sessionStorage.rollDexterity) + 2
        }else if(sessionStorage.race === "Half-Orc"){
            sessionStorage.rollStrength = parseInt(sessionStorage.rollStrength) + 2
            sessionStorage.rollConstitution = parseInt(sessionStorage.rollConstitution) + 2
        }else if(sessionStorage.race === "Human"){
            sessionStorage.rollStrength = parseInt(sessionStorage.rollStrength) + 1
            sessionStorage.rollDexterity = parseInt(sessionStorage.rollDexterity) + 1
            sessionStorage.rollConstitution = parseInt(sessionStorage.rollConstitution) + 1
            sessionStorage.rollIntelligence = parseInt(sessionStorage.rollIntelligence) + 1
            sessionStorage.rollWisdom = parseInt(sessionStorage.rollWisdom) + 1
            sessionStorage.rollCharisma = parseInt(sessionStorage.rollCharisma) + 1
        }else if (sessionStorage.race === "Tiefling"){
            sessionStorage.rollCharisma = parseInt(sessionStorage.rollCharisma) + 2
            sessionStorage.rollIntelligence = parseInt(sessionStorage.rollIntelligence) + 1
        }
        if(parseInt(sessionStorage.rollStrength) > 0 && parseInt(sessionStorage.rollStrength) < 2) {
            sessionStorage.setItem("strengthBonus", "- 5")
        }else if (parseInt(sessionStorage.rollStrength) >= 2 && parseInt(sessionStorage.rollStrength) < 4){
            sessionStorage.setItem("strengthBonus", "- 4")
        }else if (parseInt(sessionStorage.rollStrength) >= 4 && parseInt(sessionStorage.rollStrength) < 6){
            sessionStorage.setItem("strengthBonus", "- 3")
        }else if (parseInt(sessionStorage.rollStrength) >= 6 && parseInt(sessionStorage.rollStrength) < 8) {
            sessionStorage.setItem("strengthBonus", "- 2")
        }else if (parseInt(sessionStorage.rollStrength) >= 8 && parseInt(sessionStorage.rollStrength) < 10) {
            sessionStorage.setItem("strengthBonus", "- 1")
        }else if (parseInt(sessionStorage.rollStrength) >= 10 && parseInt(sessionStorage.rollStrength) < 12) {
            sessionStorage.setItem("strengthBonus", "+ 0")
        }else if (parseInt(sessionStorage.rollStrength) >= 12 && parseInt(sessionStorage.rollStrength) < 14) {
            sessionStorage.setItem("strengthBonus", "+ 1")
        }else if (parseInt(sessionStorage.rollStrength) >= 14 && parseInt(sessionStorage.rollStrength) < 16) {
            sessionStorage.setItem("strengthBonus", "+ 2")
        }else if (parseInt(sessionStorage.rollStrength) >= 16 && parseInt(sessionStorage.rollStrength) < 18) {
            sessionStorage.setItem("strengthBonus", "+ 3")
        }else if (parseInt(sessionStorage.rollStrength) >= 18 && parseInt(sessionStorage.rollStrength) < 20) {
            sessionStorage.setItem("strengthBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollStrength) >= 20 && parseInt(sessionStorage.rollStrength) < 22) {
            sessionStorage.setItem("strengthBonus", "+ 5") 
        }else if(parseInt(sessionStorage.rollStrength) == 22){
            sessionStorage.setItem("strengthBonus", "+ 6") 
        }
        if(parseInt(sessionStorage.rollDexterity)> 0 && parseInt(sessionStorage.rollDexterity)< 2) {
            sessionStorage.setItem("dexterityBonus", "- 5")
        }else if (parseInt(sessionStorage.rollDexterity)>= 2 && parseInt(sessionStorage.rollDexterity)< 4){
            sessionStorage.setItem("dexterityBonus", "- 4")
        }else if (parseInt(sessionStorage.rollDexterity)>= 4 && parseInt(sessionStorage.rollDexterity)< 6){
            sessionStorage.setItem("dexterityBonus", "- 3")
        }else if (parseInt(sessionStorage.rollDexterity)>= 6 && parseInt(sessionStorage.rollDexterity)< 8) {
            sessionStorage.setItem("dexterityBonus", "- 2")
        }else if (parseInt(sessionStorage.rollDexterity)>= 8 && parseInt(sessionStorage.rollDexterity)< 10) {
            sessionStorage.setItem("dexterityBonus", "- 1")
        }else if (parseInt(sessionStorage.rollDexterity)>= 10 && parseInt(sessionStorage.rollDexterity)< 12) {
            sessionStorage.setItem("dexterityBonus", "+ 0")
        }else if (parseInt(sessionStorage.rollDexterity)>= 12 && parseInt(sessionStorage.rollDexterity)< 14) {
            sessionStorage.setItem("dexterityBonus", "+ 1")
        }else if (parseInt(sessionStorage.rollDexterity)>= 14 && parseInt(sessionStorage.rollDexterity)< 16) {
            sessionStorage.setItem("dexterityBonus", "+ 2")
        }else if (parseInt(sessionStorage.rollDexterity)>= 16 && parseInt(sessionStorage.rollDexterity)< 18) {
            sessionStorage.setItem("dexterityBonus", "+ 3")
        }else if (parseInt(sessionStorage.rollDexterity)>= 18 && parseInt(sessionStorage.rollDexterity)< 20) {
            sessionStorage.setItem("dexterityBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollDexterity) >= 20 && parseInt(sessionStorage.rollDexterity) < 22) {
            sessionStorage.setItem("dexterityBonus", "+ 5")
        }else if(parseInt(sessionStorage.rollDexterity) == 22){
            sessionStorage.setItem("dexterityBonus", "+ 6")
        }
        if(parseInt(sessionStorage.rollConstitution)> 0 && parseInt(sessionStorage.rollConstitution)< 2) {
            sessionStorage.setItem("constitutionBonus", "- 5")
        }else if (parseInt(sessionStorage.rollConstitution)>= 2 && parseInt(sessionStorage.rollConstitution)< 4){
            sessionStorage.setItem("constitutionBonus", "- 4")
        }else if (parseInt(sessionStorage.rollConstitution)>= 4 && parseInt(sessionStorage.rollConstitution)< 6){
            sessionStorage.setItem("constitutionBonus", "- 3")
        }else if (parseInt(sessionStorage.rollConstitution)>= 6 && parseInt(sessionStorage.rollConstitution)< 8) {
            sessionStorage.setItem("constitutionBonus", "- 2")
        }else if (parseInt(sessionStorage.rollConstitution)>= 8 && parseInt(sessionStorage.rollConstitution)< 10) {
            sessionStorage.setItem("constitutionBonus", "- 1")
        }else if (parseInt(sessionStorage.rollConstitution)>= 10 && parseInt(sessionStorage.rollConstitution)< 12) {
            sessionStorage.setItem("constitutionBonus", "+ 0")
        }else if (parseInt(sessionStorage.rollConstitution)>= 12 && parseInt(sessionStorage.rollConstitution)< 14) {
            sessionStorage.setItem("constitutionBonus", "+ 1")
        }else if (parseInt(sessionStorage.rollConstitution)>= 14 && parseInt(sessionStorage.rollConstitution)< 16) {
            sessionStorage.setItem("constitutionBonus", "+ 2")
        }else if (parseInt(sessionStorage.rollConstitution)>= 16 && parseInt(sessionStorage.rollConstitution)< 18) {
            sessionStorage.setItem("constitutionBonus", "+ 3")
        }else if (parseInt(sessionStorage.rollConstitution)>= 18 && parseInt(sessionStorage.rollConstitution)< 20) {
            sessionStorage.setItem("constitutionBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollConstitution) >= 20 && parseInt(sessionStorage.rollConstitution) < 22) {
            sessionStorage.setItem("constitutionBonus", "+ 5")
        }else if(parseInt(sessionStorage.rollConstitution) == 22){
            sessionStorage.setItem("constitutionBonus", "+ 6")
        }
        if(parseInt(sessionStorage.rollIntelligence)> 0 && parseInt(sessionStorage.rollIntelligence)< 2) {
            sessionStorage.setItem("intelligenceBonus", "- 5")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 2 && parseInt(sessionStorage.rollIntelligence)< 4){
            sessionStorage.setItem("intelligenceBonus", "- 4")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 4 && parseInt(sessionStorage.rollIntelligence)< 6){
            sessionStorage.setItem("intelligenceBonus", "- 3")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 6 && parseInt(sessionStorage.rollIntelligence)< 8) {
            sessionStorage.setItem("intelligenceBonus", "- 2")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 8 && parseInt(sessionStorage.rollIntelligence)< 10) {
            sessionStorage.setItem("intelligenceBonus", "- 1")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 10 && parseInt(sessionStorage.rollIntelligence)< 12) {
            sessionStorage.setItem("intelligenceBonus", "+ 0")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 12 && parseInt(sessionStorage.rollIntelligence)< 14) {
            sessionStorage.setItem("intelligenceBonus", "+ 1")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 14 && parseInt(sessionStorage.rollIntelligence)< 16) {
            sessionStorage.setItem("intelligenceBonus", "+ 2")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 16 && parseInt(sessionStorage.rollIntelligence)< 18) {
            sessionStorage.setItem("intelligenceBonus", "+ 3")
        }else if (parseInt(sessionStorage.rollIntelligence)>= 18 && parseInt(sessionStorage.rollIntelligence)< 20) {
            sessionStorage.setItem("intelligenceBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollIntelligence) >= 20 && parseInt(sessionStorage.rollIntelligence) < 22) {
            sessionStorage.setItem("intelligenceBonus", "+ 5")
        }else if(parseInt(sessionStorage.rollIntelligence) == 22){
            sessionStorage.setItem("intelligenceBonus", "+ 6")
        }
        if(sessionStorage.rollWisdom> 0 && sessionStorage.rollWisdom< 2) {
            sessionStorage.setItem("wisdomBonus", "- 5")
        }else if (sessionStorage.rollWisdom>= 2 && sessionStorage.rollWisdom< 4){
            sessionStorage.setItem("wisdomBonus", "- 4")
        }else if (sessionStorage.rollWisdom>= 4 && sessionStorage.rollWisdom< 6){
            sessionStorage.setItem("wisdomBonus", "- 3")
        }else if (sessionStorage.rollWisdom>= 6 && sessionStorage.rollWisdom< 8) {
            sessionStorage.setItem("wisdomBonus", "- 2")
        }else if (sessionStorage.rollWisdom>= 8 && sessionStorage.rollWisdom< 10) {
            sessionStorage.setItem("wisdomBonus", "- 1")
        }else if (sessionStorage.rollWisdom>= 10 && sessionStorage.rollWisdom< 12) {
            sessionStorage.setItem("wisdomBonus", "+ 0")
        }else if (sessionStorage.rollWisdom>= 12 && sessionStorage.rollWisdom< 14) {
            sessionStorage.setItem("wisdomBonus", "+ 1")
        }else if (sessionStorage.rollWisdom>= 14 && sessionStorage.rollWisdom< 16) {
            sessionStorage.setItem("wisdomBonus", "+ 2")
        }else if (sessionStorage.rollWisdom>= 16 && sessionStorage.rollWisdom< 18) {
            sessionStorage.setItem("wisdomBonus", "+ 3")
        }else if (sessionStorage.rollWisdom>= 18 && sessionStorage.rollWisdom< 20) {
            sessionStorage.setItem("wisdomBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollWisdom) >= 20 && parseInt(sessionStorage.rollWisdom) < 22) {
            sessionStorage.setItem("wisdomBonus", "+ 5")
        }else if(parseInt(sessionStorage.rollWisdom) == 22){
            sessionStorage.setItem("wisdomBonus", "+ 6")
        }
        if(parseInt(sessionStorage.rollCharisma)> 0 && parseInt(sessionStorage.rollCharisma)< 2) {
            sessionStorage.setItem("charismaBonus", "- 5")
        }else if (parseInt(sessionStorage.rollCharisma)>= 2 && parseInt(sessionStorage.rollCharisma)< 4){
            sessionStorage.setItem("charismaBonus", "- 4")
        }else if (parseInt(sessionStorage.rollCharisma)>= 4 && parseInt(sessionStorage.rollCharisma)< 6){
            sessionStorage.setItem("charismaBonus", "- 3")
        }else if (parseInt(sessionStorage.rollCharisma)>= 6 && parseInt(sessionStorage.rollCharisma)< 8) {
            sessionStorage.setItem("charismaBonus", "- 2")
        }else if (parseInt(sessionStorage.rollCharisma)>= 8 && parseInt(sessionStorage.rollCharisma)< 10) {
            sessionStorage.setItem("charismaBonus", "- 1")
        }else if (parseInt(sessionStorage.rollCharisma)>= 10 && parseInt(sessionStorage.rollCharisma)< 12) {
            sessionStorage.setItem("charismaBonus", "+ 0")
        }else if (parseInt(sessionStorage.rollCharisma)>= 12 && parseInt(sessionStorage.rollCharisma)< 14) {
            sessionStorage.setItem("charismaBonus", "+ 1")
        }else if (parseInt(sessionStorage.rollCharisma)>= 14 && parseInt(sessionStorage.rollCharisma)< 16) {
            sessionStorage.setItem("charismaBonus", "+ 2")
        }else if (parseInt(sessionStorage.rollCharisma)>= 16 && parseInt(sessionStorage.rollCharisma)< 18) {
            sessionStorage.setItem("charismaBonus", "+ 3")
        }else if (sessionStorage.rollCharisma>= 18 && sessionStorage.rollCharisma< 20) {
            sessionStorage.setItem("charismaBonus", "+ 4")
        }else if (parseInt(sessionStorage.rollCharisma) >= 20 && parseInt(sessionStorage.rollCharisma) < 22) {
            sessionStorage.setItem("charismaBonus", "+ 5")
        }else if(parseInt(sessionStorage.rollCharisma) == 22){
            sessionStorage.setItem("charismaBonus", "+ 6")
        }
        
        setStats(true)
    }, [])

    const handleRollAll = (evt) => {
        document.getElementById(`Strength`).className +=' animation';
        document.getElementById(`Dexterity`).className +=' animation';
        document.getElementById(`Constitution`).className +=' animation';
        document.getElementById(`Intelligence`).className +=' animation';
        document.getElementById(`Wisdom`).className +=' animation';
        document.getElementById(`Charisma`).className +=' animation';
    }
    const handleRoll = (evt) => {
       
        document.getElementById(`${evt.target.id}`).className +=' animation';
    }
    const handleBack = (evt) => {
        
        props.history.push("/BaseInfo")
    }
    const handleNext = (evt) => {
        
        props.history.push("/HitPoints")
    }

return (
    <>
    <BaseNavBar />
    <ProgressBar className="characterCreationProgress" animated variant="danger" now="56" ></ProgressBar>
    <div className="stats">
        
        <h1 className="statTitle">Primary Stats</h1>
        <Row>
        <Col sm={2}>
            
        <div onClick={handleBack} class="arrowBackStats"></div>
        </Col>
        <Col sm={8} className="statCardCol">
        <Button 
            className="rollButtonAll"
            variant="custom" 
            type="submit"
            id="rollAll"
            onClick={handleRollAll}
            >
           <strong className="boldRollAll">Roll All</strong>
            </Button>
           
    <div className="cardRow1">
        <Row className="statCardRow">
            <Card className="statCard text-center m-3" >
            <Card.Body className={`statCardBody${sessionStorage.class}`}id="Strength">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Strength
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
                Strength
            </Card.Title>
            
            <p className="cardDescriptionStats">
                Your Strength stat is<br></br>
                {parseInt(sessionStorage.rollStrength)}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.strengthBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        <Card className="statCard text-center m-3"  >
            <Card.Body className={`statCardBody${sessionStorage.class}`} id="Dexterity">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Dexterity
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
            Dexterity
            </Card.Title>
            <p className="cardDescriptionStats">
            Your Strength stat is<br></br>
                {parseInt(sessionStorage.rollDexterity)}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.dexterityBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        <Card className="statCard text-center m-3"  >
            <Card.Body className={`statCardBody${sessionStorage.class}`} id="Constitution">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Constitution
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
            Constitution
            </Card.Title>
            <p className="cardDescriptionStats">
            Your Constitution stat is<br></br>
                {parseInt(sessionStorage.rollConstitution)}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.constitutionBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        </Row>
        
        </div>
        <div className="rollButtonRow1">
        
        
        <Button 
            className="rollButton1"
            variant="custom" 
            type="submit"
            id="Strength"
            onClick={handleRoll}
            >
            <strong id="Strength" className="boldRoll">Roll</strong>
            </Button>
            <Button 
            className="rollButton2"
            variant="custom" 
            type="submit"
            id="Dexterity"
            onClick={handleRoll}
            >
           <strong id="Dexterity" className="boldRoll">Roll</strong>
            </Button>
            <Button 
            className="rollButton3"
            variant="custom" 
            type="submit"
            id="Constitution"
            onClick={handleRoll}
            >
              <strong id="Constitution" className="boldRoll">Roll</strong>
            </Button>
           
            
        </div>
        <div className="cardRow2">
            <Row className="statCardRow">
        <Card className="statCard text-center m-3"  >
            <Card.Body className={`statCardBody${sessionStorage.class}`} id="Intelligence">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Intelligence
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
            Intelligence
            </Card.Title>
            <p className="cardDescriptionStats">
            Your Intelligence stat is<br></br>
                {parseInt(sessionStorage.rollIntelligence)}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.intelligenceBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card><Card className="statCard text-center m-3"  >
            <Card.Body className={`statCardBody${sessionStorage.class}`} id="Wisdom">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Wisdom
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
            Wisdom
            </Card.Title>
            <p className="cardDescriptionStats">
            Your Wisdom stat is<br></br>
                {sessionStorage.rollWisdom}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.wisdomBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card><Card className="statCard text-center m-3"  >
            <Card.Body className={`statCardBody${sessionStorage.class}`} id="Charisma">
            <div className="cardFront" >
            <Card.Title className="statCardTitleFront">
                Charisma
            </Card.Title>
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            </div>
            <div className="cardBack" >
            <Card.Img roundedCircle src={sessionStorage.picture} className="statCardImg">
                
            </Card.Img>
            <Card.Title className="statCardTitleBack">
            Charisma
            </Card.Title>
            <p className="cardDescriptionStats">
            Your Charisma stat is<br></br>
                {parseInt(sessionStorage.rollCharisma)}<br></br>
                which gives you a bonus of<br></br>
                {sessionStorage.charismaBonus}
            </p>
            
            </div>
            </Card.Body>
        </Card>
        </Row>
        </div>
        <div className="rollButtonRow2">
        <Button 
            className="rollButton4"
            variant="custom" 
            type="submit"
            id="Intelligence"
            onClick={handleRoll}
            
            >
            <strong  id="Intelligence" className="boldRoll">Roll</strong>
            </Button>
            <Button 
            className="rollButton5"
            variant="custom" 
            type="submit"
            id="Wisdom"
            onClick={handleRoll}
            >
            <strong id="Wisdom" className="boldRoll">Roll</strong>
            </Button>
            <Button 
            className="rollButton6"
            variant="custom" 
            type="submit"
            id="Charisma"
            onClick={handleRoll}
            >
          <strong  id="Charisma" className="boldRoll">Roll</strong>
            </Button>
        </div>
        </Col>
        <Col>
        <div onClick={handleNext} class="arrowNextStats"></div>
        </Col>
        </Row>
</div>
</>
)
}

export default Stats