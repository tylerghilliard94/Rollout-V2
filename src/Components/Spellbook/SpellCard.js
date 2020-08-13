import React from "react"
import {Card, Col, Row, Image, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"

const SpellCard = props => {

        const handleSpellDelete = (evt) => {
            APIManager.Delete("spellBook", evt.target.id ).then((response) => props.setSpells(response))

        }
        const handleDetails = (evt) => {
            sessionStorage.setItem("spellId", props.spell.id )
            props.history.push("/SpellBookDetails")
        }
    return (
        <>
        <Col className="spellContainerCol">
         <Card className="SpellCardContainerMain">
            <Card.Body className="SpellCardBody"  onClick={handleDetails} >
          
              
            <Image className="spellImageMain" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
          
           
            <Card.Text className="SpellCardText">
            {props.spell.name}
            </Card.Text>
            <p className="SpellCardLevel">Level: {props.spell.level}</p>
            <div className="SpellCardDescOverFlow">
            <p className="SpellCardDesc">{props.spell.desc}</p>
           
            </div>
           
            
             
            
           
          
            </Card.Body>
        </Card>
        <Button className="deleteSpellBtn" id={props.spell.id} onClick={handleSpellDelete}>
                Delete Spell
            </Button>
        

            </Col>
        </>
    )
}

export default SpellCard