import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button} from "react-bootstrap"
import SpellCard from "./SpellCard"
import "./Spellbook.css"

const SpellBook = props => {
    const [spells, setSpells] = useState([])
    const [filterSpells, setFilterSpells] = useState([])
    const [refresh, setRefresh] = useState("")

    useEffect(() =>{
        sessionStorage.removeItem("spellUrl")
        APIManager.GetCharactersSpells("spellBook").then((response) => {
            setFilterSpells(response)
            setSpells(response)})
       

    }, [refresh])
    const refreshSpellBook = (refresh) => {
        setRefresh(refresh)
    }
    const handleSearchChange = evt => {
       console.log(spells)
        let searchEvent = evt.target.value
        searchEvent = searchEvent.toUpperCase()
        let  filteredSpells = spells.filter(spell => 
            

            spell.name.toUpperCase().includes(searchEvent) ? true: false
            
        
        )
        
       
       
        

        
      setFilterSpells(filteredSpells)
        
    }

    const handleNewSpell = (evt) => {
        props.history.push("/SpellBookNew")
    }
    return(
        <>
        <CharacterNavBar {...props} />
        {console.log(spells)}
        <Row>
        <Form inline className="searchForm">
            <FormControl type="text" placeholder="Search" className=" mr-sm-2  spellSearchBar" onChange={handleSearchChange}  />
            
        </Form>
        <Button onClick={handleNewSpell}>
            Add New Spell
        </Button>
        </Row>
        <Row>
        {filterSpells.map(spell => 
            <SpellCard  spell={spell} setSpells={refreshSpellBook} {...props} /> )}
            </Row>
        </>
    )
}

export default SpellBook