import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button, Col} from "react-bootstrap"


const InventoryDetails = props => {
    const [equipment, setEquipment] = useState({})
    
    

    useEffect(() =>{
        APIManager.GetSpellDetails(sessionStorage.inventoryUrl).then((response) => {
            
        setEquipment(response)})
        
    }, [])
    const damageDice = () => {
        if(equipment.damage == undefined){
            return ""
        }else{
            return equipment.damage.damage_dice
        }
    }
    const damageType = () => {
        if(equipment.damage == undefined){
            return ""
        }else{
            return equipment.damage.damage_type.name
        }
    }
    const armorClass = () => {
        if(equipment.armor_class == undefined){
            return ""
        }else{
            return equipment.armor_class.base
        }
    }
    const stealthDis = () => {
        if(equipment.stealth_disadvantage == false){
            return "None"
        }else{
            return equipment.stealth_disadvantage
        }
    }
   const handleSaveEquipment = () => {
       equipment.characterId = parseInt(sessionStorage.characterId)
        equipment.equipmentType = sessionStorage.equipmentType
       APIManager.Post("inventory", equipment).then(() =>{
           props.history.push("/Inventory")
       })
   }
   
    return(
        <>
        <CharacterNavBar {...props} />
        <Card className="spellDetailCard">
        <Card.Body className="spellDetailCardBody">
      
    <h1 className="spellName">{equipment.name}</h1>
      
    {/* {equipment.classes.map(type=>
        <h2>{type.name}</h2>)} */}
            <Col>
            <p className="spellDesc">{equipment.desc}</p>
            </Col>
            <Col>
            {sessionStorage.equipmentType === "armor" ? <p>{equipment.armor_category} Armor</p> : null}
            </Col>
            <Col>
            <p>{equipment.category_range}</p>
            </Col>
           
            <Row>
                <Col>
            <p>Weight: {equipment.weight}</p>
            </Col>
            
            {sessionStorage.equipmentType === "armor" ? <Col><p>Armor Class: {armorClass()} </p> </Col> : null}
            {sessionStorage.equipmentType === "weapons" ? <Col>
            <p>Damage: {damageDice()}</p>
            </Col> : null}
            {sessionStorage.equipmentType === "weapons" ?  <Col>
            <p>Damage Type: {damageType()}</p>
            </Col> : null}
           
            {sessionStorage.equipmentType === "armor" ? <Col>
            <p>Stealth Disadvantage: {stealthDis()}</p>
            </Col> : null}
            

           
            </Row>
            <Row>
            
           
            
            {/* <p>{equipment.school.name}</p> */}
           <Col>
            {sessionStorage.equipmentType === "armor" ? <p>Minimum Strength Needed: {equipment.str_minimum}</p> : null}
            </Col>
            <Col>
            <p>{equipment.casting_time}</p>
            </Col>
            {/* <p>{equipment.dc.dc_type.name}</p> */}
            {/* <p>{equipment.dc.dc_success}</p> */}
            </Row>
        
        <Button className="saveSpellBtn" onClick={handleSaveEquipment}>
        Save equipment
        </Button>
        </Card.Body>
        </Card>
        </>
    )
}

export default InventoryDetails