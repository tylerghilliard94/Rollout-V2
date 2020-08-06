import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager"
import { Card, CardTitle, CardBody, CardImg, CardSubtitle, Form, FormGroup, Input, Button, Row, Col, Label, Alert } from "reactstrap";
import "./Login.css"


const Login = (props) => {
    const [credentials, setCredentials] = useState({ userId: 0 });
    const [users, setUsers] = useState([])
    
    
    useEffect(()=> {
      APIManager.GetAll("users")
      .then((response) => {
        setUsers(response)
      })
    }, [])
    
    
    const handleLogin = (event) => {
        event.preventDefault();
        const userNameInputValue = document.getElementById("userName").value
        const userPassword = document.getElementById("password").value
        let userNameCheck = false
        let passwordCheck = false

        users.forEach(user => {
          
          
          if (user.userName === userNameInputValue) {
            
            userNameCheck = true;
            if (user.password === userPassword) {
             
              passwordCheck = true;
              credentials.userId = user.id
              let characterCheck= false
              props.setUser(credentials)
                APIManager.GetAll("characters").then((response) => {
                   
                    response.forEach(character => {
                      if(character.userId === parseInt(sessionStorage.activeUserID)){
                          characterCheck = true
                      }
                    })
                }).then(() => {
                    console.log(characterCheck)
                    if(characterCheck){
                      props.history.push("/Dashboard")
                    } else {
                        props.history.push("/CharacterPrompt")
                    }
                })
              
              
            } 
          } 
        })
          if (userNameCheck === true) {
            if (passwordCheck === false) {  
              
              return (
                window.alert("Incorrect Password")
              )
            }
          } else {
            return (
                window.alert("Incorrect Username")
                    )
          }
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }



    return (
      <Col className="loginContainer">
        <Card className="loginCard">
          <CardBody className="loginCardBody">
          <CardImg 
          className="loginLogo" 
          src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596404968/Role_Out_D_ygzjys.png"


          alt="imgLogo" />
         
         <CardSubtitle className="loginWelcomeSub">
           Your life of adventure starts here!
         </CardSubtitle>

          <Form onSubmit={handleLogin}>
          <Row>
            <Col>
            <FormGroup>
              <Label className="loginUsernameLabel">Username</Label>
              <Input className="loginForm"
                onChange={handleFieldChange}
                type="text"
                id="userName"
                placeholder="Enter Username"
              />
            </FormGroup>
            <FormGroup>
              <Label className="loginPasswordLabel">Password</Label>
              <Input className="loginForm"
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <Button 
            className = "loginButton"
            variant="custom" 
            type="submit">
              Login
            </Button>
            </Col>
            <Col>
            <Button
              className = "registerButton"
              variant= "custom"
              onClick={() => props.history.push("/Registration")}
              
              type="submit"
            >
              Register New Account
            </Button>
            </Col>
            </Row>
          </Form>
          </CardBody>
        </Card>
      </Col>
    );
}

export default Login