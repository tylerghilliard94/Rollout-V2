import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button, Col} from "react-bootstrap"
import InventoryCard from "./InventoryCard"
import "./Inventory.css"
import Money from "./Money"

const Inventory = props => {
    const [equipments, setEquipments] = useState([])
    const [filterEquipments, setFilterEquipments] = useState([])
    const [refresh, setRefresh] = useState("")
    const [equipmentStatus, setEquipmentStatus] = useState(true)
  

    const weaponSet = (response) => {
        let filter = response.filter(equipment => {
            if(equipment.equipmentType === "weapons"){
                return true
            }else{
                return false
            }
        })

        setEquipments(filter)
        setFilterEquipments(filter)
        setEquipmentStatus(true)
    }

    const armorSet = (response) => {
        let filter = response.filter(equipment => {
            if(equipment.equipmentType === "armor"){
                return true
            }else{
                return false
            }
        })
        setEquipments(filter)
        setFilterEquipments(filter)
        setEquipmentStatus(false)
    }
    const equipmentSet = (response) => {
        let filter = response.filter(equipment => {
            if(equipment.equipmentType === "equipment"){
                return true
            }else{
                return false
            }
        })
        setEquipments(filter)
        setFilterEquipments(filter)
        setEquipmentStatus(false)
    }

    useEffect(() => {
        sessionStorage.setItem("equipmentType", "equipment")

    }, [])
    useEffect(() =>{
        
        sessionStorage.removeItem("equipmentUrl")
        if(sessionStorage.equipmentType === "equipment"){

        
        APIManager.GetCharactersSpells("inventory").then((response) => {
            equipmentSet(response)
        })}else if (sessionStorage.equipmentType === "weapons"){
            APIManager.GetCharactersSpells("inventory").then((response) => {
                weaponSet(response)
        })}else{
            APIManager.GetCharactersSpells("inventory").then((response) => {
                armorSet(response)
        })  
        }
       
        
    }, [refresh])

    
    const refreshEquipmentBook = (refresh) => {
        setRefresh(refresh)
    }
    const handleSearchChange = evt => {
       console.log(equipments)
        let searchEvent = evt.target.value
        searchEvent = searchEvent.toUpperCase()
        let  filteredequipments = equipments.filter(equipment => 
            

            equipment.name.toUpperCase().includes(searchEvent) ? true: false
            
        
        )
        
       
       
        

        
      setFilterEquipments(filteredequipments)
        
    }

    const handleNewequipment = (evt) => {
        props.history.push("/InventoryNew")
    }

    const handlEquipmentChange = (evt) => {
        sessionStorage.equipmentType = evt.target.value
        refreshEquipmentBook(evt.target.value)
}
    const handleNewItem = () => {
        props.history.push("/InventoryCustom")
    }
    // const handleLevelSort = (evt) => {
    //     if(evt.target.value === "All"){
    //         setRefresh(evt.target.value)
    //     }else{
    //         let filter = equipments.filter(equipment =>{
    //             if(equipment.level === parseInt(evt.target.value)){
    //                 return true
    //             }else {
    //                 return false
    //             }
    //         })
    //         console.log(filter)
    //         setFilterequipments(filter)
    //     }
    // }
    return(
        <>
        <CharacterNavBar {...props} />
        
        <Row>
            
        <Form inline className="searchForm">
        <Form.Control className="equipmentTypeForm"
                onChange={handlEquipmentChange}
                as="select"
                name="select"
                id="equipmentType"
                
                
            
              >
              
              <option value="equipment">Equipment</option>
              <option value="weapons">Weapons</option>
              
              <option value="armor">Armor</option>
             
             
              </Form.Control>
              {/* {equipmentStatus ? <Form.Control className="equipmentChangeForm"
                onChange={handleLevelSort}
                as="select"
                name="select"
                id="equipmentLevel"
                
                
            
              >
                  <option value="All">All</option>
              <option value="0">Cantrips</option>
              
              <option value="1">1</option>

              <option value="2">2</option>
              
              <option value="3">3</option>
              <option value="4">4</option>
              
              <option value="5">5</option>
              <option value="6">6</option>
              
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
             
             
              </Form.Control> 
              
              : 
              
              <Form.Control className="equipmentChangeForm"
                onChange={handleLevelSort}
                as="select"
                name="select"
                id="featLevel"
                
                
            
              >
                  <option value="All">All</option>
             <option value="1">1</option>

            <option value="2">2</option>

            <option value="3">3</option>
            <option value="4">4</option>

            <option value="5">5</option>
            <option value="6">6</option>

            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

              <option value="11">11</option>
              
              <option value="12">12</option>
              <option value="13">13</option>
              
              <option value="14">14</option>
              <option value="15">15</option>
              
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>

             
             
              </Form.Control>} */}
            <FormControl type="text" placeholder="Search" className=" mr-sm-2  equipmentSearchBar" onChange={handleSearchChange}  />
            
        </Form>

        <Button className="newSpellBtn" onClick={handleNewequipment}>
            Add New Equipment
        </Button>
        <Button className="newSpellBtn"onClick={handleNewItem}>
            Add Custom Equipment
        </Button>
        <Col>
        <Money />
        </Col>
        </Row>
        <Col className="equipmentCardCol">
        <Row>
        {filterEquipments.map(equipment => 
            <InventoryCard  equipment={equipment} setEquipment={refreshEquipmentBook} {...props} /> )}
            </Row>
            </Col>
        </>
    )
}

export default Inventory