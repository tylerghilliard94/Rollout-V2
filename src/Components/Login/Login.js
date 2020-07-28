import React, { useState, useEffect } from "react";
import APIManager from "../Modules/APIManager"
import { Card,CardTitle, CardBody, CardImg, CardSubtitle, Form, FormGroup, Input, Button, Row, Col, Label } from "reactstrap";
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
              props.setUser(credentials)
              props.history.push("/Dashboard")
            } 
          } 
        })
          if (userNameCheck === true) {
            if (passwordCheck === false) {  
              
              return (
                alert("Password is incorrect.")
                      )
              
            }
          } else {
            return (
              alert("Username is incorrect")
                    )
          }
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }



    return (
      <div className="loginContainer">
        <Card className="loginCard">
          <CardBody>
          <CardImg 
          className="loginLogo" 
          src={("../images/logo.png")} 
          alt="imgLogo" />
         <CardTitle className="loginWelcome"> 
         Welcome to Re-Roll
         </CardTitle>
         <CardSubtitle className="loginWelcomeSub">
           Your life of adventure starts here!
         </CardSubtitle>

          <Form onSubmit={handleLogin}>
          <Row>
            <Col>
            <FormGroup>
              <Label className="loginLabel">Username</Label>
              <Input className="loginForm"
                onChange={handleFieldChange}
                type="text"
                id="userName"
                placeholder="Enter Username"
              />
            </FormGroup>
            <FormGroup>
              <Label className="loginLabel">Password</Label>
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
      </div>
    );
}

export default Login