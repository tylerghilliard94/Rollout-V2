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
        <Card className="equipmentDetailCard">
        <Row >
    <h1>{equipment.name}</h1>
        {console.log(equipment)}
    {/* {equipment.classes.map(type=>
        <h2>{type.name}</h2>)} */}
    </Row>
        <Row>
            <Col>
            <p>{equipment.desc}</p>
            {sessionStorage.equipmentType === "armor" ? <p>{equipment.armor_category} Armor</p> : null}
            <p>{equipment.category_range}</p>
           
            <Row>
            <p>Weight: {equipment.weight}</p>
            <p>{armorClass()}</p>
            <p>{damageDice()}</p>
            <p>{damageType()}</p>
            <p>{stealthDis()}</p>

           
            </Row>
            <Row>
            
           
            
            {/* <p>{equipment.school.name}</p> */}
           
            {sessionStorage.equipmentType === "armor" ? <p>Minimum Strength Needed: {equipment.str_minimum}</p> : null}
            
            <p>{equipment.casting_time}</p>
            {/* <p>{equipment.dc.dc_type.name}</p> */}
            {/* <p>{equipment.dc.dc_success}</p> */}
            </Row>
            </Col>
        </Row>
        <Button onClick={handleSaveEquipment}>
        Save equipment
        </Button>
        </Card>
        </>
    )
}

export default InventoryDetails