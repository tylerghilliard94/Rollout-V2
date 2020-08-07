import React, { useEffect, useState } from "react"
import {Row, Col, Image, Button} from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import CharacterNavBar from "../NavBar/CharacterNavBar"
import { set } from "object-path"
import "./CharacterProfile.css"

const CharacterProfile = props => {
    const [character, setCharacter] = useState({})
    const [skills, setSkills] = useState([])
    const [strengthSkills, setStrengthSkills] = useState([])
    const [dexteritySkills, setDexteritySkills] = useState([])
    const [constitutionSkills, setConstitutionSkills] = useState([])
    const [intelligenceSkills, setIntelligenceSkills] = useState([])
    const [wisdomSkills, setWisdomSkills] = useState([])
    const [charismaSkills, setCharismaSkills] = useState([])
   const [refresh, setRefresh] = useState(false)
   const [editable, setEditable] = useState(false)
   const [bonuses, setBonuses] = useState({strengthBonus: "+ 0", dexterityBonus: "+ 0", constitutionBonus: "+ 0", intelligenceBonus: "+ 0", wisdomBonus: "+ 0", charismaBonus: "+ 0",})


   const skillFilter = () => {
    let strengthFilter = skills.filter(skill => {
        if(skill.stat === "Strength"){
            return true
        }else{
            return false
        }
        
    })

    let dexterityFilter = skills.filter(skill => {
        if(skill.stat === "Dexterity"){
            return true
        }else{
            return false
        }
    })

    let constitutionFilter = skills.filter(skill => {
        if(skill.stat === "Constitution"){
            return true
        }else{
            return false
        }
    })

    let intelligenceFilter = skills.filter(skill => {
        if(skill.stat === "Intelligence"){
            return true
        }else{
            return false
        }
    })

    let wisdomFilter = skills.filter(skill => {
        if(skill.stat === "Wisdom"){
            return true
        }else{
            return false
        }
    })

    let charismaFilter = skills.filter(skill => {
        if(skill.stat === "Charisma"){
            return true
        }else{
            return false
        }
    })
    setStrengthSkills(strengthFilter)
    setDexteritySkills(dexterityFilter)
    setConstitutionSkills(constitutionFilter)
    setIntelligenceSkills(intelligenceFilter)
    setWisdomSkills(wisdomFilter)
    setCharismaSkills(charismaFilter)
   }
   useEffect(() => {
    APIManager.GetAll("skills").then((response) => {
        setSkills(response)
    })
    APIManager.GetbyId("characters", sessionStorage.characterId).then((response) => {
        setCharacter(response)
       
    }).then(() => {
        setRefresh(true)
        skillFilter()
        
    })
    
    
   
    
     
}, [refresh])




    if(character.strength > 0 && character.strength < 2) {
        bonuses.strengthBonus = "- 5"
    }else if (character.strength >= 2 && character.strength < 4){
        bonuses.strengthBonus = "- 4"
    }else if (character.strength >= 4 && character.strength < 6){
        bonuses.strengthBonus = "- 3"
    }else if (character.strength >= 6 && character.strength < 8) {
        bonuses.strengthBonus = "- 2"
    }else if (character.strength >= 8 && character.strength < 10) {
        bonuses.strengthBonus = "- 1"
    }else if (character.strength >= 10 && character.strength < 12) {
        bonuses.strengthBonus = "+ 0"
    }else if (character.strength >= 12 && character.strength < 14) {
        bonuses.strengthBonus = "+ 1"
    }else if (character.strength >= 14 && character.strength < 16) {
        bonuses.strengthBonus = "+ 2"
    }else if (character.strength >= 16 && character.strength < 18) {
        bonuses.strengthBonus = "+ 3"
    }else if (character.strength >= 18 && character.strength < 20) {
        bonuses.strengthBonus = "+ 4"
    }else if (character.strength >= 20 && character.strength < 22) {
        bonuses.strengthBonus = "+ 5"
    }else if(character.strength == 22){
        bonuses.strengthBonus = "+ 6"
    }
    if(character.dexterity> 0 && character.dexterity< 2) {
        bonuses.dexterityBonus = "- 5"
    }else if (character.dexterity>= 2 && character.dexterity< 4){
        bonuses.dexterityBonus = "- 4"
    }else if (character.dexterity>= 4 && character.dexterity< 6){
        bonuses.dexterityBonus = "- 3"
    }else if (character.dexterity>= 6 && character.dexterity< 8) {
        bonuses.dexterityBonus = "- 2"
    }else if (character.dexterity>= 8 && character.dexterity< 10) {
        bonuses.dexterityBonus = "- 1"
    }else if (character.dexterity>= 10 && character.dexterity< 12) {
        bonuses.dexterityBonus = "+ 0"
    }else if (character.dexterity>= 12 && character.dexterity< 14) {
        bonuses.dexterityBonus = "+ 1"
    }else if (character.dexterity>= 14 && character.dexterity< 16) {
        bonuses.dexterityBonus = "+ 2"
    }else if (character.dexterity>= 16 && character.dexterity< 18) {
        bonuses.dexterityBonus = "+ 3"
    }else if (character.dexterity>= 18 && character.dexterity< 20) {
        bonuses.dexterityBonus = "+ 4"
    }else if (character.dexterity >= 20 && character.dexterity < 22) {
        bonuses.dexterityBonus = "+ 5"
    }else if(character.dexterity == 22){
        bonuses.dexterityBonus = "+ 6"
    }
    if(character.constitution> 0 && character.constitution< 2) {
        bonuses.constitutionBonus = "- 5"
    }else if (character.constitution>= 2 && character.constitution< 4){
        bonuses.constitutionBonus = "- 4"
    }else if (character.constitution>= 4 && character.constitution< 6){
        bonuses.constitutionBonus = "- 3"
    }else if (character.constitution>= 6 && character.constitution< 8) {
        bonuses.constitutionBonus = "- 2"
    }else if (character.constitution>= 8 && character.constitution< 10) {
        bonuses.constitutionBonus = "- 1"
    }else if (character.constitution>= 10 && character.constitution< 12) {
        bonuses.constitutionBonus = "+ 0"
    }else if (character.constitution>= 12 && character.constitution< 14) {
        bonuses.constitutionBonus = "+ 1"
    }else if (character.constitution>= 14 && character.constitution< 16) {
        bonuses.constitutionBonus = "+ 2"
    }else if (character.constitution>= 16 && character.constitution< 18) {
        bonuses.constitutionBonus = "+ 3"
    }else if (character.constitution>= 18 && character.constitution< 20) {
        bonuses.constitutionBonus = "+ 4"
    }else if (character.constitution >= 20 && character.constitution < 22) {
        bonuses.constitutionBonus = "+ 5"
    }else if(character.constitution == 22){
        bonuses.constitutionBonus = "+ 6"
    }
    if(character.intelligence> 0 && character.intelligence< 2) {
        bonuses.intelligenceBonus = "- 5"
    }else if (character.intelligence>= 2 && character.intelligence< 4){
        bonuses.intelligenceBonus = "- 4"
    }else if (character.intelligence>= 4 && character.intelligence< 6){
        bonuses.intelligenceBonus = "- 3"
    }else if (character.intelligence>= 6 && character.intelligence< 8) {
        bonuses.intelligenceBonus = "- 2"
    }else if (character.intelligence>= 8 && character.intelligence< 10) {
        bonuses.intelligenceBonus = "- 1"
    }else if (character.intelligence>= 10 && character.intelligence< 12) {
        bonuses.intelligenceBonus = "+ 0"
    }else if (character.intelligence>= 12 && character.intelligence< 14) {
        bonuses.intelligenceBonus = "+ 1"
    }else if (character.intelligence>= 14 && character.intelligence< 16) {
        bonuses.intelligenceBonus = "+ 2"
    }else if (character.intelligence>= 16 && character.intelligence< 18) {
        bonuses.intelligenceBonus = "+ 3"
    }else if (character.intelligence>= 18 && character.intelligence< 20) {
        bonuses.intelligenceBonus = "+ 4"
    }else if (character.intelligence >= 20 && character.intelligence < 22) {
        bonuses.intelligenceBonus = "+ 5"
    }else if(character.intelligence == 22){
        bonuses.intelligenceBonus = "+ 6"
    }
    if(character.wisdom> 0 && character.wisdom< 2) {
        bonuses.wisdomBonus = "- 5"
    }else if (character.wisdom>= 2 && character.wisdom< 4){
        bonuses.wisdomBonus = "- 4"
    }else if (character.wisdom>= 4 && character.wisdom< 6){
        bonuses.wisdomBonus = "- 3"
    }else if (character.wisdom>= 6 && character.wisdom< 8) {
        bonuses.wisdomBonus = "- 2"
    }else if (character.wisdom>= 8 && character.wisdom< 10) {
        bonuses.wisdomBonus = "- 1"
    }else if (character.wisdom>= 10 && character.wisdom< 12) {
        bonuses.wisdomBonus = "+ 0"
    }else if (character.wisdom>= 12 && character.wisdom< 14) {
        bonuses.wisdomBonus = "+ 1"
    }else if (character.wisdom>= 14 && character.wisdom< 16) {
        bonuses.wisdomBonus = "+ 2"
    }else if (character.wisdom>= 16 && character.wisdom< 18) {
        bonuses.wisdomBonus = "+ 3"
    }else if (character.wisdom>= 18 && character.wisdom< 20) {
        bonuses.wisdomBonus = "+ 4"
    }else if (character.wisdom >= 20 && character.wisdom < 22) {
        bonuses.wisdomBonus = "+ 5"
    }else if(character.wisdom == 22){
        bonuses.wisdomBonus = "+ 6"
    }
    if(character.charisma> 0 && character.charisma< 2) {
        bonuses.charismaBonus = "- 5"
    }else if (character.charisma>= 2 && character.charisma< 4){
        bonuses.charismaBonus = "- 4"
    }else if (character.charisma>= 4 && character.charisma< 6){
        bonuses.charismaBonus = "- 3"
    }else if (character.charisma>= 6 && character.charisma< 8) {
        bonuses.charismaBonus = "- 2"
    }else if (character.charisma>= 8 && character.charisma< 10) {
        bonuses.charismaBonus = "- 1"
    }else if (character.charisma>= 10 && character.charisma< 12) {
        bonuses.charismaBonus = "+ 0"
    }else if (character.charisma>= 12 && character.charisma< 14) {
        bonuses.charismaBonus = "+ 1"
    }else if (character.charisma>= 14 && character.charisma< 16) {
        bonuses.charismaBonus = "+ 2"
    }else if (character.charisma>= 16 && character.charisma< 18) {
        bonuses.charismaBonus = "+ 3"
    }else if (character.charisma>= 18 && character.charisma< 20) {
        bonuses.charismaBonus = "+ 4"
    }else if (character.charisma >= 20 && character.charisma < 22) {
        bonuses.charismaBonus = "+ 5"
    }else if(character.charisma == 22){
        bonuses.charismaBonus = "+ 6"
    }

   

    
    const clearUser = () => {
        sessionStorage.clear();
        localStorage.clear();
        
    }
    const skillBonuses = (skill) => {

        if(skill.stat === "Strength"){
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.strengthBonus.split(" ")[0]} ${parseInt(bonuses.strengthBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.strengthBonus.split(" ")[0]} ${parseInt(bonuses.strengthBonus.split(" ")[1])}`)
            }

        }else if(skill.stat === "Dexterity"){
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.dexterityBonus.split(" ")[0]} ${parseInt(bonuses.dexterityBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.dexterityBonus.split(" ")[0]} ${parseInt(bonuses.dexterityBonus.split(" ")[1])}`)
            }
        }else if(skill.stat === "Constitution"){
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.constitutionBonus.split(" ")[0]} ${parseInt(bonuses.constitutionBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.constitutionBonus.split(" ")[0]} ${parseInt(bonuses.constitutionBonus.split(" ")[1])}`)
            }
        }else if (skill.stat === "Intelligence"){
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.intelligenceBonus.split(" ")[0]} ${parseInt(bonuses.intelligenceBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.intelligenceBonus.split(" ")[0]} ${parseInt(bonuses.intelligenceBonus.split(" ")[1])}`)
            }
        }else if(skill.stat === "Wisdom") {
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.wisdomBonus.split(" ")[0]} ${parseInt(bonuses.wisdomBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.wisdomBonus.split(" ")[0]} ${parseInt(bonuses.wisdomBonus.split(" ")[1])}`)
            }
        }else if(skill.stat === "Charisma") {
            if(skill.name === character.skill1 || skill.name === character.skill2 || skill.name === character.skill3){
                return (`${bonuses.charismaBonus.split(" ")[0]} ${parseInt(bonuses.charismaBonus.split(" ")[1]) + parseInt(character.proficiencyBonus)}`)
            }else{
                return (`${bonuses.charismaBonus.split(" ")[0]} ${parseInt(bonuses.charismaBonus.split(" ")[1])}`)
            }
        }
    }
    const handleEdit = () => {
        setEditable(true)
    }
    const handleEvtChange = (event) => {
        const stateToChange = { ...character };
        stateToChange[event.target.id] = event.target.value;
        setCharacter(stateToChange);
        
    }
    const handleEditSave = () => {
        
        APIManager.Update("characters", character.id, character).then(() => {
            setEditable(false)

        })
    }

    if(parseInt(character.userId) !== parseInt(sessionStorage.activeUserID)){
        return(
            <>
            
                    <CharacterNavBar clearUser={clearUser} {...props} />
            
            <Row>
                <Col>
                <div>
                    
                <h2>{character.characterName}'s Profile</h2>
                    <Image roundedCircle className="dashboardCardImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png"></Image>
                    
                    <p>Name: {character.characterName}</p>
                    <p>Description: {character.description}</p>
                    <p>Level: {character.level}</p>
                    <p>Alignment: {character.alignment}</p>
                    <p>Proficient Skills:<br></br>
                    {character.skill1}<br></br>
                    {character.skill2}<br></br>
                    {character.skill3}</p>
                    <p>Proficiency bonus: {character.proficiencyBonus}</p>
                    <p>Spellcasting Ability: {character.spellcastingAbility}</p>
                    <p>Spell Save DC: {character.spellSaveDC}</p>
                    <p>Spell Attack Bonus: {character.spellAttackBonus}</p>
                    
    
                </div>
                </Col>
                <Col>
                <p className="experience">Experience: {character.experience}</p>
                {/* Create Sections for these tomorrow  */}
                {strengthSkills.map(skill =>
                    
                   <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                   
                )}
                {dexteritySkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {constitutionSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {intelligenceSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {wisdomSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {charismaSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                </Col>
                <Col>
                <p>Hit Points: {character.hitPoints}</p>
                <p>Strength: {character.strength}</p>
    
                <p>Intelligence: {character.intelligence}</p>
                </Col>
                <Col>
                <p>Initiative: {bonuses.dexterityBonus}</p>
                <p>Dexterity: {character.dexterity}</p>
                <p>Wisdom: {character.wisdom}</p>
                </Col>
                <Col>
                <p className="armorClass">Armor Class: {character.armorClass} + {parseInt(bonuses.dexterityBonus.split(" ")[1])}</p>
                <p>Constitution: {character.constitution}</p>
                <p>Charisma: {character.charisma}</p>
                </Col>
            </Row>
            </>
        )

    }else{

    
      if(editable === false) {
        return(
            <>
            
                    <CharacterNavBar clearUser={clearUser} {...props} />
            
            <Row>
                <Col>
                <div>
                    
                <h2>{character.characterName}'s Profile</h2>
                <Image roundedCircle className="dashboardCardImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png"></Image>
                    
                    <p>Name: <a onClick={handleEdit}>{character.characterName}</a></p>
                    <p>Description: <a onClick={handleEdit}>{character.description}</a></p>
                    <p>Level: <a onClick={handleEdit}>{character.level}</a></p>
                    <p>Alignment: <a onClick={handleEdit}>{character.alignment}</a></p>
                    <p>Proficient Skills:<br></br>
                    {character.skill1}<br></br>
                    {character.skill2}<br></br>
                    {character.skill3}</p>
                    <p>Proficiency bonus: <a onClick={handleEdit}>{character.proficiencyBonus}</a></p>
                    <p>Spellcasting Ability: {character.spellcastingAbility}</p>
                    <p>Spell Save DC: {character.spellSaveDC}</p>
                    <p>Spell Attack Bonus: {character.spellAttackBonus}</p>
    
                </div>
                </Col>
                <Col>
                <p>Experience: <a onClick={handleEdit}>{character.experience}</a></p>
                {strengthSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {dexteritySkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {constitutionSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {intelligenceSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {wisdomSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {charismaSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                </Col>
                <Col>
                <div className="HitPointContainer">
                    <p>Hit Points</p>
                    <Image roundedCircle  className= "hitPointsImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596428401/gold_ring_tvyezp.png"/>
                <p className="hitPoints"> <a className="hitPointsText" onClick={handleEdit}>{character.hitPoints}</a></p>
                </div>
                <p>Strength: <a onClick={handleEdit}>{character.strength}</a></p>
    
                <p>Intelligence: <a onClick={handleEdit}>{character.intelligence}</a></p>
                </Col>
                <Col>
                <p>Initiative: <a onClick={handleEdit}>{bonuses.dexterityBonus}</a></p>
                <p>Dexterity: <a onClick={handleEdit}>{character.dexterity}</a></p>
                <p>Wisdom: <a onClick={handleEdit}>{character.wisdom}</a></p>
                </Col>
                <Col>
                <div className="armorClassContainer">
                    <p className="ArmorClassLabel">Armor Class</p>
                <Image className="armorClassImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596429468/darkenedShield_g5ypu5.png"/>
                <p className="armorClass" > <a className="armorClassText" onClick={handleEdit}>{character.armorClass} + {parseInt(bonuses.dexterityBonus.split(" ")[1])}</a></p>
                </div>
                <p>Constitution: <a onClick={handleEdit}>{character.constitution}</a></p>
                <p>Charisma: <a onClick={handleEdit}>{character.charisma}</a></p>
                </Col>
            </Row>
            </>
        )
      } else if (editable === true){
        return(
            <>
            
                    <CharacterNavBar clearUser={clearUser} {...props} />
            
            <Row>
                <Col>
                <div>
                    
                <h2>{character.characterName}'s Profile</h2>
                <Image roundedCircle className="dashboardCardImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png"></Image>
                   
                    <p>Name: <textarea onChange={handleEvtChange} id="characterName" value={character.characterName}></textarea></p>
                    <p>Description: <textarea onChange={handleEvtChange}id="description" value={character.description}></textarea></p>
                    <p>Level: <textarea onChange={handleEvtChange}id="level"value={character.level}></textarea></p>
                    <p>Alignment: <textarea onChange={handleEvtChange}id="alignment"value={character.alignment}></textarea></p>
                    <p>Proficient Skills:<br></br>
                    {character.skill1}<br></br>
                    {character.skill2}<br></br>
                    {character.skill3}</p>
                    <p>Proficiency bonus: <textarea onChange={handleEvtChange}id="proficiencyBonus"value={character.proficiencyBonus}></textarea></p>
                    <p>Spellcasting Ability: {character.spellcastingAbility}</p>
                    <p>Spell Save DC: <textarea onChange={handleEvtChange}id="spellSaveDC"value={character.spellSaveDC}></textarea></p>
                    <p>Spell Attack Bonus: <textarea onChange={handleEvtChange}id="spellAttackBonus"value={character.spellAttackBonus}></textarea></p>
    
                </div>
                </Col>
                <Col>
                <p>Experience: <textarea onChange={handleEvtChange}id="experience"value={character.experience}></textarea></p>
                {strengthSkills.map(skill =>
                    
                    <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                    
                 )}
                 {dexteritySkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {constitutionSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {intelligenceSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {wisdomSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                  {charismaSkills.map(skill =>
                     
                     <p className="skillBonuses"> {skill.name}: {skillBonuses(skill)} </p>
                     
                  )}
                </Col>
                <Col>
                <div className="HitPointContainer">
                    <p>Hit Points</p>
                    <Image roundedCircle  className= "hitPointsImage" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596428401/gold_ring_tvyezp.png"/>
                <p> <textarea onChange={handleEvtChange}id="hitPoints" className="hitPointsTextArea" value={character.hitPoints}></textarea></p>
                </div>
                <p>Strength: <textarea onChange={handleEvtChange}id="strength"value={character.strength}></textarea></p>
    
                <p>Intelligence: <textarea onChange={handleEvtChange}id="intelligence"value={character.intelligence}></textarea></p>
                </Col>
                <Col>
                <p>Initiative: {bonuses.dexterityBonus}</p>
                <p>Dexterity: <textarea onChange={handleEvtChange}id="dexterity"value={character.dexterity}></textarea></p>
                <p>Wisdom: <textarea onChange={handleEvtChange}id="wisdom"value={character.wisdom}></textarea></p>
                </Col>
                <Col>
                <p>Armor Class</p>
                <div className="armorClassContainer">
                <Image className="armorClassImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596429468/darkenedShield_g5ypu5.png"/>
                <p><textarea onChange={handleEvtChange}id="armorClass" className="armorClassTextArea" value={character.armorClass}></textarea></p>
                </div>
                <p>Constitution: <textarea onChange={handleEvtChange}id="constitution"value={character.constitution}></textarea></p>
                <p>Charisma: <textarea onChange={handleEvtChange}id="charisma"value={character.charisma}></textarea></p>

                <Button onClick={handleEditSave}>
                    Save Edit
                </Button>
                </Col>
            </Row>
            </>
        )
      }
    }
    
}

export default CharacterProfile