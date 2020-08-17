import React from "react"
import {Card, Col, Row, Image} from "react-bootstrap"

const SpellCardNew = props => {


    const handleDetails = (evt) => {
        sessionStorage.setItem("spellUrl", props.spell.url )
        props.history.push("/SpellDetails")
    }
    return (
        <>
         <Card className="SpellCardContainer">
            <Card.Body className="SpellCardBodyNew"  onClick={handleDetails} >
            <Row className="SpellCardRowNew" >
                <Col className="SpellCol" sm={3}>
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
            </Col>
            <Col className="SpellCol" sm={6}>
            <Card.Text className="SpellCardText">
            {props.spell.name}
            </Card.Text>
            
            </Col>
           
            
             
            
           
            </Row>
            </Card.Body>
        </Card>
        
        


        </>
    )
}

export default SpellCardNew