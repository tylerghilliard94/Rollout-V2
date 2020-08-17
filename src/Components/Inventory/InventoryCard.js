import React from "react"
import {Card, Col, Row, Image, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"

const InventoryCard = props => {

        const handleEquipmentDelete = (evt) => {
            APIManager.Delete("inventory", evt.target.id ).then((response) => props.setEquipment(response))

        }
        const damageDice = () => {
            if(props.equipment.damage == undefined){
                return ""
            }else{
                return props.equipment.damage.damage_dice
            }
        }
        const damageType = () => {
            if(props.equipment.damage == undefined){
                return ""
            }else{
                return props.equipment.damage.damage_type.name
            }
        }
        const armorClass = () => {
            if(props.equipment.armor_class == undefined){
                return ""
            }else{
                return props.equipment.armor_class.base
            }
        }
        const handleDetails = (evt) => {
            sessionStorage.setItem("inventoryId", props.equipment.id )
            props.history.push("/EquipmentDetails")
        }
    return (
        <>
        <Col className="spellContainerCol">
         <Card className="SpellCardContainerMain">
            <Card.Body className="SpellCardBody"  onClick={handleDetails} >
          
              
            <Image className="spellImageMain" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
          
           
            <Card.Text className="SpellCardTextMain">
            {props.equipment.name} {props.equipment.custom ? <div>({props.equipment.custom})</div> : null}
           
            </Card.Text>
            
            <p className="SpellCardDesc">{props.equipment.desc}</p>
            {sessionStorage.equipmentType === "weapons" ? <p className="SpellCardDescArmor">{damageDice()}</p> :  sessionStorage.equipmentType === "armor" ? <p className="SpellCardDescArmor">Armor Type: {props.equipment.armor_category}</p> : null}
            {sessionStorage.equipmentType === "weapons" ? <p className="SpellCardDescArmor">{damageType()}</p> :  sessionStorage.equipmentType === "armor" ? <p className="SpellCardDescArmor">Armor Class: {armorClass()}</p> : null}
            
           
            
           
    
           
            
             
            
           
          
            </Card.Body>
        </Card>
        <Button className="deleteSpellBtn" id={props.equipment.id} onClick={handleEquipmentDelete}>
                Delete Equipment
            </Button>
        </Col>
        


        </>
    )
}

export default InventoryCard