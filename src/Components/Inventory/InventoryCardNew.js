import React from "react"
import {Card, Col, Row, Image} from "react-bootstrap"

const InventoryCardNew = props => {


    const handleDetails = (evt) => {
        sessionStorage.setItem("inventoryUrl", props.equipment.url )
        props.history.push("/InventoryDetails")
    }
    return (
        <>
         <Card className="equipmentCardContainer">
            <Card.Body className="equipmentCardBodyNew"  onClick={handleDetails} >
            <Row className="equipmentCardRowNew" >
                <Col className="equipmentCol" sm={3}>
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
            </Col>
            <Col className="equipmentCol" sm={6}>
            <Card.Text className="equipmentCardText">
            {props.equipment.name}
            </Card.Text>
            
            </Col>
           
            
             
            
           
            </Row>
            </Card.Body>
        </Card>
        
        


        </>
    )
}

export default InventoryCardNew