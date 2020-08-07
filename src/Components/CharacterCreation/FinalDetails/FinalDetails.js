import React, {useState, useEffect} from "react"
import {Button, Form, Row, ProgressBar, Col} from "react-bootstrap"
import APIManager from "../../Modules/APIManager"
import "./FinalDetails.css"
import BaseNavBar from "../../NavBar/BaseNavBar"

const FinalDetails = props => {
    const [info, setInfo] = useState({language1: "", language2: "", skill1: "", skill2: "", skill3: "", alignment: ""})
    const [language, setLanguage] = useState([])
    const [skill, setSkill] = useState([])
    const [alignment, setAlignment] = useState([])
    const[disableLang, setDisableLang] = useState(true)
    const[disableSkill1, setDisableSkill1] = useState(true)
    const[disableSkill2, setDisableSkill2] = useState(true)
    const[disableSkill3, setDisableSkill3] = useState(true)
    const[disableAlignment, setDisableAlignment] = useState(true)
    const[disableFinal, setDisableFinal] = useState(true)
    

    const characterFactory = () => {
        let finalCharacter = {}
        finalCharacter.userId = parseInt(sessionStorage.activeUserID)
        finalCharacter.characterName = sessionStorage.characterName
        finalCharacter.class = sessionStorage.class
        finalCharacter.picture = sessionStorage.picture
        finalCharacter.level = parseInt(sessionStorage.level)
        finalCharacter.race = sessionStorage.race
        finalCharacter.description = sessionStorage.description
        finalCharacter.alignment = sessionStorage.alignment
        finalCharacter.experience = 0
        finalCharacter.strength = parseInt(sessionStorage.rollStrength)
        finalCharacter.dexterity = parseInt(sessionStorage.rollDexterity)
        finalCharacter.constitution = parseInt(sessionStorage.rollConstitution)
        finalCharacter.intelligence = parseInt(sessionStorage.rollIntelligence)
        finalCharacter.wisdom = parseInt(sessionStorage.rollWisdom)
        finalCharacter.charisma = parseInt(sessionStorage.rollCharisma)
        // for now like this
        finalCharacter.proficiencyBonus = parseInt(sessionStorage.proficiencyBonus)
        finalCharacter.hitPoints = parseInt(sessionStorage.hitPoints)
        finalCharacter.hitDice = parseInt(sessionStorage.hitDice)
        finalCharacter.skill1 = sessionStorage.skill1
        finalCharacter.skill2 = sessionStorage.skill2
        finalCharacter.skill3 = sessionStorage.skill3
        // for now like this
        finalCharacter.armorClass = 10
        // for now like this
        finalCharacter.speed = 30
        finalCharacter.language1 = sessionStorage.language1
        finalCharacter.language2 = sessionStorage.language2
        // for now like this
        if(sessionStorage.class === "Bard"){
            finalCharacter.spellcastingAbility = "Charisma"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
        }else if(sessionStorage.class === "Cleric"){
            finalCharacter.spellcastingAbility = "Wisdom"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.wisdomBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.wisdomBonus.split(" ")[1]))
        }else if(sessionStorage.class === "Druid"){
            finalCharacter.spellcastingAbility = "Wisdom"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.wisdomBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.wisdomBonus.split(" ")[1]))
        }else if(sessionStorage.class === "Paladin"){
            finalCharacter.spellcastingAbility = "Charisma"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
        } else if(sessionStorage.class === "Sorcerer"){
            finalCharacter.spellcastingAbility = "Charisma"
            console.log((8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1])))
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
        }else if(sessionStorage.class === "Warlock"){
            finalCharacter.spellcastingAbility = "Charisma"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.charismaBonus.split(" ")[1]))
        }else if(sessionStorage.class === "Wizard"){
            finalCharacter.spellcastingAbility = "Intelligence"
            finalCharacter.spellSaveDC = (8 + parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.intelligenceBonus.split(" ")[1]))
            finalCharacter.spellAttackBonus = (parseInt(sessionStorage.proficiencyBonus) + parseInt(sessionStorage.intelligenceBonus.split(" ")[1]))
        }else{
            finalCharacter.spellcastingAbility = 0
            finalCharacter.spellSaveDC = 0
            finalCharacter.spellAttackBonus = 0
        }
        
        // for now like this
       
        // for now like this
        

        return finalCharacter

    }

    const setFinalDetails = () => {
        sessionStorage.setItem("language1", info.language1)
        sessionStorage.setItem("language2", info.language2)
        sessionStorage.setItem("skill1", info.skill1)
        sessionStorage.setItem("skill2", info.skill2)
        sessionStorage.setItem("skill3", info.skill3)
        sessionStorage.setItem("alignment", info.alignment)
        return true
    }
    const clearCharacter = () => {
        sessionStorage.removeItem("characterName")
        sessionStorage.removeItem("class")
        sessionStorage.removeItem("level")
        sessionStorage.removeItem("race")
        sessionStorage.removeItem("picture")
        sessionStorage.removeItem("description")
        sessionStorage.removeItem("alignment")
        sessionStorage.removeItem("rollStrength")
        sessionStorage.removeItem("rollDexterity")
        sessionStorage.removeItem("rollConstitution")
        sessionStorage.removeItem("rollIntelligence")
        sessionStorage.removeItem("rollWisdom")
        sessionStorage.removeItem("rollCharisma")
        sessionStorage.removeItem("strengthBonus")
        sessionStorage.removeItem("dexterityBonus")
        sessionStorage.removeItem("constitutionBonus")
        sessionStorage.removeItem("intelligenceBonus")
        sessionStorage.removeItem("wisdomBonus")
        sessionStorage.removeItem("charismaBonus")
        sessionStorage.removeItem("hitPoints")
        sessionStorage.removeItem("hitDice")
        sessionStorage.removeItem("skill1")
        sessionStorage.removeItem("skill2")
        sessionStorage.removeItem("skill3")
        sessionStorage.removeItem("language1")
        sessionStorage.removeItem("language2")
        
    }
    const handleFinalizeCharacter = () => {
        
        
             
        saveCharacter(setFinalDetails())
        
        
        
    }

    const saveCharacter = () => {
        APIManager.Post("characters", characterFactory()).then(() => clearCharacter()).then(() => {
            props.history.push("/Dashboard")
    })
    
    }

    const handleBack = () => {
        props.history.push("/HitPoints")

    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        
    }

    const handleLang1FieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableLang(false)
        
    }
    const handleLang2FieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableSkill1(false)
        
    }
    const handleSkill1FieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableSkill2(false)
        
    }
    const handleSkill2FieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableSkill3(false)
        
    }
    const handleSkill3FieldChange = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableAlignment(false)
       
    }
    const handleFinal = (event) => {
        const stateToChange = { ...info };
        stateToChange[event.target.id] = event.target.value;
        setInfo(stateToChange);
        setDisableFinal(false)
       
    }

    useEffect(() => {
        APIManager.GetAll("languages").then((response) => {
            setLanguage(response)
        })

        APIManager.GetAll("skills").then((response) => {
            setSkill(response)

       
        })
        APIManager.GetAll("alignments").then((response) => {
            setAlignment(response)
        })
    }, [])

    return(
        <>
        <BaseNavBar />
         <ProgressBar className="characterCreationProgress" animated variant="danger" now="90" ></ProgressBar>
      
           
        
        
        
        
       
            <Col className="finalInfoContainer">
        <Row className="finalInfoRow">
            <Col>
            <div onClick={handleBack} class="arrowBackFinal"></div>
            </Col>
            
            <Col>
        <Form className="dropdownForm">
       
            <h2 className="languageTitle">Choose your Languages:</h2>
            <Form.Group>
            <label className="language1label">Language one</label>
              <Form.Control className="characterFinalForm"
                onChange={handleLang1FieldChange}
                as="select"
                name="select"
                id="language1"
                
                
            
              >
              <option value="">Choose...</option>
              {language.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
             
              </Form.Control>
              
              <label className="language2label">Language two</label>
              <Form.Control className="characterFinalForm"
                onChange={handleLang2FieldChange}
                as="select"
                name="select"
                id="language2"
                disabled={disableLang}
                
            
              >
              <option value="">Choose...</option>
              {language.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
             
              </Form.Control>
            </Form.Group>
            
           
            
            
                <h2 className="skillTitle">Choose your Skills:</h2>
            <Form.Group>
              <label className="skill1label">Skill one</label>
              <Form.Control className="characterFinalForm"
                onChange={handleSkill1FieldChange}
                as="select"
                name="select"
                id="skill1"
                disabled={disableSkill1}
                
                
            
              >
              <option value="">Choose...</option>
              {skill.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
             
              </Form.Control>
              <label className="skill2label">Skill two</label>
              <Form.Control className="characterFinalForm"
                onChange={handleSkill2FieldChange}
                as="select"
                name="select"
                id="skill2"
                disabled={disableSkill2}
                
            
              >
              <option value="">Choose...</option>
              {skill.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
              </Form.Control>
              <label className="skill3label">Skill three</label>
              <Form.Control className="characterFinalForm"
                onChange={handleSkill3FieldChange}
                as="select"
                name="select"
                id="skill3"
                disabled={disableSkill3}
                
            
              >
              <option value="">Choose...</option>
              {skill.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
              </Form.Control>
            </Form.Group>
            
                <h2 className="alignmentTitle">Choose your Alignment:</h2>
            <Form.Group>
            <Form.Control className="characterFinalForm"
                onChange={handleFinal}
                as="select"
                name="select"
                id="alignment"
                disabled={disableAlignment}
                
                
            
              >
              <option value="">Choose...</option>
              {alignment.map(choice =>
              <option value={choice.name} key={choice.name}>{choice.name}</option>
              )}
              </Form.Control>
               </Form.Group>
             
            
            
            </Form>
            </Col>
            <Col>
            <Button 
            className="finalCharacter"
            variant="custom" 
            type="submit"
            disabled={disableFinal}
            onClick={handleFinalizeCharacter}>
              <strong>Finalize Character</strong>
            </Button>
            </Col>
            </Row>
            </Col>
        </>
    )
}

export default FinalDetails