import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button, Col} from "react-bootstrap"
import SpellCard from "./SpellCard"

const SpellDetails = props => {
    const [spell, setSpell] = useState({})
    


    useEffect(() =>{
        APIManager.GetSpellDetails(sessionStorage.spellUrl).then((response) => setSpell(response))

    }, [])

   const handleSaveSpell = () => {
       spell.characterId = parseInt(sessionStorage.characterId)

       APIManager.Post("spellBook", spell).then(() =>{
           props.history.push("/SpellBook")
       })
   }
    return(
        <>
        <CharacterNavBar {...props} />
        <Card className="spellDetailCard">
        <Row >
    <h1>{spell.name}</h1>
    
    {/* {spell.classes.map(type=>
        <h2>{type.name}</h2>)} */}
    </Row>
        <Row>
            <Col>
            <p>{spell.desc}</p>
            <p>{spell.higher_level}</p>
           
            <Row>
            <p>{spell.range}</p>
            <p>{spell.duration}</p>
            </Row>
            <Row>
            <p>Spell Level: {spell.level}</p>
           
            
            {/* <p>{spell.school.name}</p> */}
           
           
            
            <p>{spell.casting_time}</p>
            {/* <p>{spell.dc.dc_type.name}</p> */}
            {/* <p>{spell.dc.dc_success}</p> */}
            </Row>
            </Col>
        </Row>
        <Button onClick={handleSaveSpell}>
        Save spell
        </Button>
        </Card>
        </>
    )
}

export default SpellDetails