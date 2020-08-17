import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button, Col} from "react-bootstrap"


const EquipmentDetails = props => {
    const [equipment, setEquipment] = useState({})
    
    

    useEffect(() =>{
        APIManager.GetbyId("inventory",sessionStorage.inventoryId).then((response) => {
            
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
    const handleBackSpell = () => {
        sessionStorage.removeItem("inventoryId")
         props.history.push("/Inventory")
       
    }
   
    return(
        <>
        <CharacterNavBar {...props} />
        <Card className="spellDetailCard">
        <Card.Body className="spellDetailCardBody">
      
      <h1 className="spellName">{equipment.name} {equipment.custom ? <div>({equipment.custom})</div> : null }</h1>
        {console.log(equipment)}
      {/* {equipment.classes.map(type=>
          <h2>{type.name}</h2>)} */}
              <Col>
              <p className="spellDesc">{equipment.desc}</p>
              </Col>
              {equipment.custom ? null : <div>
              
             
              <Row>
              {sessionStorage.equipmentType === "armor" ? <Col><p className="moneyNumbersRight">{equipment.armor_category} Armor</p> </Col> : null}
              {sessionStorage.equipmentType === "weapons" ?  <Col>
              <p className="moneyNumbersLeft">{equipment.category_range}</p>
              </Col>
              : null}
                  <Col>
              <p className="moneyNumbersLeft">Weight: {equipment.weight}</p>
              </Col>
              {sessionStorage.equipmentType === "equipment" ? <Col><p className="moneyNumbersMiddle">{equipment.gear_category} </p> </Col> : null}
              {sessionStorage.equipmentType === "armor" ? <Col><p className="moneyNumbersMiddle">Armor Class: {armorClass()} </p> </Col> : null}
              {sessionStorage.equipmentType === "weapons" ? <Col>
              <p className="moneyNumbersMiddle" >Damage: {damageDice()}</p>
              </Col> : null}
              {sessionStorage.equipmentType === "weapons" ?  <Col>
              <p className="moneyNumbersRight">Damage Type: {damageType()}</p>
              </Col> : null}
              {sessionStorage.equipmentType === "equipment" ? <Col><p className="moneyNumbersRight">Quantity: {equipment.quantity} </p> </Col> : null}
             
              
  
             
              </Row>
              <Row>
              
             
              {sessionStorage.equipmentType === "armor" ? <Col>
              <p className="moneyNumbersRight">Stealth Disadvantage: {stealthDis()}</p>
              </Col> : null}
              {/* <p>{equipment.school.name}</p> */}
             <Col>
              {sessionStorage.equipmentType === "armor" ? <p className="moneyNumbersRight">Minimum Strength Needed: {equipment.str_minimum}</p> : null}
              </Col>
              <Col>
              <p className="moneyNumbersRight">{equipment.casting_time}</p>
              </Col>
              {/* <p>{equipment.dc.dc_type.name}</p> */}
              {/* <p>{equipment.dc.dc_success}</p> */}
              </Row></div>}
              
          
          <Button className="saveSpellBtn" onClick={handleBackSpell}>
          Back to Inventory
          </Button>
          </Card.Body>
        </Card>
        </>
    )
}

export default EquipmentDetails