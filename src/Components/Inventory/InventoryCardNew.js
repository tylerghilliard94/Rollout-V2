import React from "react"
import {Card, Col, Row, Image} from "react-bootstrap"

const InventoryCardNew = props => {


    const handleDetails = (evt) => {
        sessionStorage.setItem("inventoryUrl", props.equipment.url )
        props.history.push("/InventoryDetails")
    }
    return (
        <>
         <Card className="SpellCardContainer">
            <Card.Body className="SpellCardBodyNew"  onClick={handleDetails} >
       
                <Col className="SpellCol" sm={3}>
            <Image className="spellImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
            </Col>
           
            <Card.Text className="SpellCardTextNew">
            {props.equipment.name}
            </Card.Text>
            
  
           
            
             
            
           
      
            </Card.Body>
        </Card>
        
        
        


        </>
    )
}

export default InventoryCardNew