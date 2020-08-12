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
    return (
        <>
         <Card className="SpellCardContainer">
            <Card.Body className="SpellCardBody"   >
          
              
            <Image className="friendImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
          
           
            <Card.Text className="SpellCardText">
            {props.equipment.name}
            </Card.Text>
            
            {sessionStorage.equipmentType === "weapons" ? <p>{damageDice()}</p> :  sessionStorage.equipmentType === "armor" ? <p>Armor Type: {props.equipment.armor_category}</p> : <p>{props.equipment.desc}</p>}
            {sessionStorage.equipmentType === "weapons" ? <p>{damageType()}</p> :  sessionStorage.equipmentType === "armor" ? <p>Armor Class: {armorClass()}</p> : null}
            
           
            
            <Button className="deleteSpellBtn" id={props.equipment.id} onClick={handleEquipmentDelete}>
                Delete Equipment
            </Button>
    
           
            
             
            
           
          
            </Card.Body>
        </Card>
        
        


        </>
    )
}

export default InventoryCard