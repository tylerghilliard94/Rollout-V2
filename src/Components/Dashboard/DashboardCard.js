import React from "react"
import {Card, Image, Row, Col } from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import {Button} from "react-materialize"

import { withRouter } from "react-router"

const DashboardCard = (props) => {

    const handleCharacterDelete = () => {
        APIManager.Delete("characters", props.character.id).then(() => {
            
                props.updateCharacters()
           
        })
    }
    const handleShowCharacterProfile = (evt) => {
        sessionStorage.setItem("characterId", evt.target.id)
        
        props.history.push("/CharacterProfile")
    }
    if(props.friendPage) {
        return(
            <>
            <Card className={`DashboardContainer${props.character.class}`}>
                
                <Card.Body className="DashboardCardBody"id={props.character.id} onClick={handleShowCharacterProfile}>
               
                <Card.Text className="DashboardCardText" id={props.character.id}>
                {props.character.characterName}
                </Card.Text>
                <Image className="dashboardCardImage"id={props.character.id} src={props.character.picture} roundedCircle />
                
                </Card.Body>
                
            </Card>
    
            
    
    
            </>
        )
    }else {
        return(
            <>
            <Card className={`DashboardContainer${props.character.class}`}>
                <Card.Body className="DashboardCardBody"id={props.character.id} onClick={handleShowCharacterProfile}>
                
                <Card.Text className="DashboardCardText"id={props.character.id} >
                {props.character.characterName}
                </Card.Text>
                <Image className="dashboardCardImage" id={props.character.id} src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596424158/logowithRing_zwiplv.png" roundedCircle />
                
               
                </Card.Body>
            </Card>
            <Button
                  className = "delete-Character-btn blue btn-floating halfway-fab large waves-effect waves-light "
                  variant= "custom"
                  id={props.character.id}
                  onClick={handleCharacterDelete}
                  
                  type="submit"
                >
                  Delete Character
                </Button>
            
    
    
            </>
        )
    }
    
}

export default withRouter(DashboardCard)