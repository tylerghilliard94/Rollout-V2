import React, {useEffect, useState} from "react"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import { Form, Button } from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import { propTypes } from "react-bootstrap/esm/Image"


const InventoryCustom = props => {
    const [object, setObject] = useState({ name: " ", desc: " ", equipmentType: " "})

    const handleFieldChange = (event) => {
        const stateToChange = { ...object };
        stateToChange[event.target.id] = event.target.value;
        setObject(stateToChange);
    }

    const handleItemSave = () => {
        object.custom = "Custom"
        object.characterId = parseInt(sessionStorage.characterId)
        APIManager.Post("inventory", object).then(() => {
            props.history.push("/Inventory")
        })
    }
   
    return (
        <>
        <CharacterNavBar />

        <Form>
            <Form.Control onChange={handleFieldChange} type="text" id="name" className="objectName">

            </Form.Control>
            <textarea onChange={handleFieldChange}  id="desc" className="objectDesc">

            </textarea>
            <Form.Control className="equipmentChangeForm"
                onChange={handleFieldChange}
                as="select"
                name="select"
                id="equipmentType"
                
                
            
              >
              <option value=" ">Choose Item Type</option>
              <option value="equipment">Equipment</option>
              <option value="weapons">Weapons</option>
              
              <option value="armor">Armor</option>
             
             
              </Form.Control>
        </Form>
        <Button className="customSaveButton" onClick={handleItemSave}>
            Save Item
        </Button>
        </>
    )
}

export default InventoryCustom