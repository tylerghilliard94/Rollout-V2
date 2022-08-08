import React from "react"
import { Card, Image, Row, Col } from "react-bootstrap"

import { Button } from "reactstrap"


const DashboardCard = ({ character }) => {

    const handleCharacterDelete = () => {
        //     APIManager.Delete("characters", props.character.id).then(() => {

        //         props.updateCharacters()

        //     })
    }
    const handleShowCharacterProfile = (evt) => {
        //     sessionStorage.setItem("characterId", evt.target.id)

        //     props.history.push("/CharacterProfile")
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