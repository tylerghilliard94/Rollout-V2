import React, {useEffect, useState} from "react"
import {Row, Col, Card, Container} from "react-bootstrap"
import APIManager from "../Modules/APIManager"
import DashboardCard from "./DashboardCard"
import BaseNavBar from "../NavBar/BaseNavBar"
import FriendsList from "../Friends/FriendList"
import "./Dashboard.css"



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
       
    }, [sessionStorage.friendId])

    if(props.friendPage) {
        return (
            <>
            <Container fluid>
            <div className="navBar">
            <BaseNavBar clearUser={clearUser} {...props} />
            </div>
            

            
            <Row className="mainRow">
                <Col sm={10}>
                <Row sm={4}>
                {characters.map(character =>
                <Col>
                <DashboardCard key={character.id} character={character} friendPage={props.friendPage} updateCharacters={updateCharacters} {...props} />
                    </Col>)}
                
                </Row>
                </Col>
                <Col sm={2}>
                    <FriendsList newFriends={refresh}  {...props} />
                </Col>
            </Row>
            </Container>
            </>
        )
    } else {
        return (
            <>
            <div className="navBar">
                <BaseNavBar clearUser={clearUser} {...props} />
            </div>
            <Row className="mainRow">
                <Col sm={9}>
                <Row sm={4}>
                {characters.map(character =>
                <Col>
                <DashboardCard key={character.id} character={character} updateCharacters={updateCharacters} {...props} />
                </Col>)}
                <Col>
                <Card className="startNewCharacterCard" onClick={handleNewCharacter}>
                    <Card.Body className="startNewCharacterCardBody">
                    <p className="cardAddTitle">
                        +
                    </p>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                </Col>
                
                <Col className="friendColDashboard" sm={2}>
                    <FriendsList newFriends={refresh} {...props} />
                </Col>
            </Row>
            </>
        )
    }
    
}

export default Dashboard