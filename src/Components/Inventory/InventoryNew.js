import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row} from "react-bootstrap"
import InventoryCardNew from "./InventoryCardNew"

const InventoryNew = props => {
    const [equipment, setEquipment] = useState([])
    const [filterEquipment, setFilterEquipment] = useState([])
    const nestingDrill = () => {

    }
    const equipmentFilter = (response) => {
        let filter = response.filter(item => {
            if(nestingDrill() === "Weapon" || item.equipment_category.name === "Armor" ){
                return false
            }else{
                return true
            }
        })

        setEquipment(filter)
    }
    useEffect(() =>{
        if(sessionStorage.equipmentType === "weapons" || sessionStorage.equipmentType === "armor"){
        APIManager.GetAll(sessionStorage.equipmentType).then((response) => {
            
            setEquipment(response)})
        }else {
            APIManager.GetAll("equipment").then((response) => {
                console.log(response)
                setEquipment(response)})
        }
    }, [])

    const handleSearchChange = evt => {
       console.log(equipment)
        let searchEvent = evt.target.value
        searchEvent = searchEvent.toUpperCase()
        let  filteredEquipment = equipment.filter(item => 
            

            item.name.toUpperCase().includes(searchEvent) ? true: false
            
        
        )
        
       
       
        if(searchEvent == ""){
            filteredEquipment = []
        }

        
      setFilterEquipment(filteredEquipment)
        
    }
    return(
        <>
        <CharacterNavBar {...props} />
        <Form inline className="searchForm">
            <FormControl type="text" placeholder="Search" className=" mr-sm-2  equipmentearchBar" onChange={handleSearchChange}  />
            
        </Form>
        <Row>
        {filterEquipment.map(equipment => 
            <InventoryCardNew  equipment={equipment} {...props} /> )}
            </Row>
        </>
    )
}

export default InventoryNew