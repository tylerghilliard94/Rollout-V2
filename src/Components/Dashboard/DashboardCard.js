import React from "react"
import { Card, Image, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import { Button } from "reactstrap"
import { deleteCharacterById } from "../APIManagers/CharacterManager"


const DashboardCard = ({ character, updateCharacters }) => {

    const navigate = useNavigate()

    const handleCharacterDelete = (evt) => {
        debugger
        deleteCharacterById(evt.target.id).then(() => {

            updateCharacters()

        })
    }
    const handleShowCharacterProfile = (evt) => {

        navigate(`/CharacterProfile/${evt.target.id}`)
    }
    // if (props.friendPage) {
    //     return (
    //         <>
    //             <Card className={`DashboardContainer${props.character.class}`}>

    //                 <Card.Body className="DashboardCardBody" id={props.character.id} onClick={handleShowCharacterProfile}>

    //                     <Card.Text className="DashboardCardText" id={props.character.id}>
    //                         {props.character.characterName}
    //                     </Card.Text>
    //                     <Image className="dashboardCardImage" id={props.character.id} src={props.character.picture} roundedCircle />

    //                 </Card.Body>

    //             </Card>




    //         </>
    //     )
    // } else {
    return (
        <>
            <Card className={`DashboardContainer${character.character_class.name}`}>
                <Card.Body className="DashboardCardBody" id={character.id} onClick={handleShowCharacterProfile}>

                    <Card.Text className="DashboardCardText" id={character.id} >
                        {character.character_name}
                    </Card.Text>
                    <Image className="dashboardCardImage" id={character.id} src={character.character_class.image} roundedCircle />


                </Card.Body>
            </Card>
            <Button
                className="delete-Character-btn blue btn-floating halfway-fab large waves-effect waves-light "
                variant="custom"
                id={character.id}
                onClick={handleCharacterDelete}

                type="submit"
            >
                Delete Character
            </Button>



        </>
    )
}

// }

export default DashboardCard