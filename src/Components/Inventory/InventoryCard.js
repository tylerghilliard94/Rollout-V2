import React from "react"
import {Card, Col, Row, Image, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"

const SpellCard = props => {

        const handleSpellDelete = (evt) => {
            APIManager.Delete("spellBook", evt.target.id ).then((response) => props.setSpells(response))

        }
    return (
        <>
         <Card className="SpellCardContainer">
            <Card.Body className="SpellCardBody"   >
          
              
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
          
           
            <Card.Text className="SpellCardText">
            {props.spell.name}
            </Card.Text>
            <p>{props.spell.desc}</p>
            <Button className="deleteSpellBtn" id={props.spell.id} onClick={handleSpellDelete}>
                Delete Spell
            </Button>
    
           
            
             
            
           
          
            </Card.Body>
        </Card>
        
        


        </>
    )
}

export default SpellCard