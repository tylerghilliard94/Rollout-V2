import React, {useState, useEffect} from "react"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import {Card, Form, FormControl, Row, Button, Col} from "react-bootstrap"
import SpellCard from "./SpellCard"
import "./Spellbook.css"

const SpellBook = props => {
    const [spells, setSpells] = useState([])
    const [filterSpells, setFilterSpells] = useState([])
    const [refresh, setRefresh] = useState("")
    const [spellStatus, setSpellStatus] = useState(true)


    const spellSet = (response) => {
        let filter = response.filter(spell => {
            if(spell.spellType === "spells"){
                return true
            }else{
                return false
            }
        })

        setSpells(filter)
        setFilterSpells(filter)
        setSpellStatus(true)
    }

    const featSet = (response) => {
        let filter = response.filter(spell => {
            if(spell.spellType === "feats"){
                return true
            }else{
                return false
            }
        })
        setSpells(filter)
        setFilterSpells(filter)
        setSpellStatus(false)
    }

    useEffect(() => {
        sessionStorage.setItem("spellType", "spells")
    }, [])
    useEffect(() =>{
        
        sessionStorage.removeItem("spellUrl")
        if(sessionStorage.spellType === "spells"){

        
        APIManager.GetCharactersSpells("spellBook").then((response) => {
            spellSet(response)
        })}else{
            APIManager.GetCharactersSpells("spellBook").then((response) => {
                featSet(response)
        })}
        
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

    const handleSpellChange = (evt) => {
        sessionStorage.spellType = evt.target.value
        refreshSpellBook(evt.target.value)
}
    const handleLevelSort = (evt) => {
        if(evt.target.value === "All"){
            setRefresh(evt.target.value)
        }else{
            let filter = spells.filter(spell =>{
                if(spell.level === parseInt(evt.target.value)){
                    return true
                }else {
                    return false
                }
            })
            console.log(filter)
            setFilterSpells(filter)
        }
    }
    return(
        <>
        <CharacterNavBar {...props} />
        {console.log(spells)}
        <Row>
            
        <Form inline className="searchForm">
        <Form.Control className="spellChangeForm"
                onChange={handleSpellChange}
                as="select"
                name="select"
                id="spellType"
                
                
            
              >
              <option value="spells">Spells</option>
              
              <option value="feats">Feats</option>
             
             
              </Form.Control>
              {spellStatus ? <Form.Control className="spellChangeForm"
                onChange={handleLevelSort}
                as="select"
                name="select"
                id="spellLevel"
                
                
            
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
              
              <Form.Control className="spellChangeForm"
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

             
             
              </Form.Control>}
            <FormControl type="text" placeholder="Search" className=" mr-sm-2  spellSearchBar" onChange={handleSearchChange}  />
            
        </Form>

        {spellStatus ?  <Button onClick={handleNewSpell}>
            Add New Spell
        </Button>
        :
        
        <Button onClick={handleNewSpell}>
            Add New Feat
        </Button>}
        
        </Row>
        <Col className="spellCardCol">
        <Row>
        {filterSpells.map(spell => 
            <SpellCard  spell={spell} setSpells={refreshSpellBook} {...props} /> )}
            </Row>
            </Col>
        </>
    )
}

export default SpellBook