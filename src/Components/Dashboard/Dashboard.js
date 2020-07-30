import React, {useEffect, useState} from "react"
import {Row, Col, Card} from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import DashboardCard from "./DashboardCard"
import BaseNavBar from "../NavBar/BaseNavBar"
import FriendsList from "../Friends/FriendList"



const Dashboard = props => {

    const [characters, setCharacters] = useState([])
    const [friends, setFriends] = useState([])
    
    
    const clearUser = () => {
        sessionStorage.clear();
        localStorage.clear();
        
    }
    const refresh = refresh => {
        setFriends(refresh)
    }
    const handleNewCharacter = () => {
        props.history.push("/Class")
    }
    const updateCharacters = () => {
        if(props.friendPage){
            APIManager.GetAllbyUserId("characters", sessionStorage.friendId)
            .then((response) => {
                setCharacters(response)
            })
    }else {
        APIManager.GetAllbyUserId("characters", sessionStorage.activeUserID)
        .then((response) => {
            setCharacters(response)
        })
    }
    }
    useEffect(() => {
        updateCharacters()
    }, [])

    if(props.friendPage) {
        return (
            <>
            <Row>
                <BaseNavBar clearUser={clearUser} {...props} />
            </Row>
            <Row>
                <Col>
                {characters.map(character =>
                <DashboardCard key={character.id} character={character} friendPage={props.friendPage} updateCharacters={updateCharacters} {...props} />
                    )}
                
               
                </Col>
                <Col>
                    <FriendsList newFriends={refresh}  {...props} />
                </Col>
            </Row>
            </>
        )
    } else {
        return (
            <>
            <Row>
                <BaseNavBar clearUser={clearUser} {...props} />
            </Row>
            <Row>
                <Col>
                {characters.map(character =>
                <DashboardCard key={character.id} character={character} updateCharacters={updateCharacters} {...props} />
                    )}
                
                <Card className="startNewCharacterCard" onClick={handleNewCharacter}>
                    <p>
                        +
                    </p>
                </Card>
                </Col>
                <Col>
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
            </Row>
            </>
        )
    }
    
}

export default Dashboard