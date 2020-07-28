import React from "react"
import { CardImg, Button, Jumbotron } from "reactstrap"
import { NavLink } from "react-router-dom"

const InitialCharacterPrompt = props => {

    

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
                <NavLink className="classNavLink" to="/Class" >
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