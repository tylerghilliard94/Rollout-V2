import React from "react"
import { CardImg, Button, Jumbotron } from "reactstrap"
import { NavLink } from "react-router-dom"

const InitialCharacterPrompt = props => {

    let characterFactory = {
        userId: sessionStorage.activeUserID,
        characterName: "",
        class: "",
        level: 1,
        race: "",
        alignment: "",
        experience: 0,
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        proficiencyBonus: 0,
        hitPoints: 0,
        hitDice: 0,
        skill1: "",
        skill2: "",
        skill3: "",
        armorClass: 0,
        speed: 30,
        initiative: 0,
        spellcastingAbility: null,
        spellSaveDC: null,
        spellAttackBonus: null
    }


    return (
        <div className="characterPromptContainer">
            <Jumbotron className="characterPromptCard">
                
                

                <h1 className="Title">
                    Welcome to Re-Roll
                </h1>
                <p className="LeadingText">
                    To get started on your adventure, lets begin by creating a character.
                </p>
                <hr />
                <p className="DescribingText">
                    Click on the button below to begin.
                </p>
                <NavLink className="classNavLink" to="/Class" characterFactory={characterFactory}>
                <Button
                className="characterPromptButton"
                variant="custom"
                type="submit"
                >
                   Create Character
                </Button>
                </NavLink>
                
            </Jumbotron>

            <CardImg 
                className="characterPromptImage"
                src={("")}
                alt="Re-roll Logo"
                />
        </div>
    )
}

export default InitialCharacterPrompt