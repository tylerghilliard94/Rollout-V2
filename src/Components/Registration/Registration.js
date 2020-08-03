import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label,  Button, Card, Alert, CardImg, CardBody, CardSubtitle, Input } from "reactstrap";
import APIManager from "../Modules/APIManager";
import "./Registration.css";


const Register = (props) => {
  
    const [credentials, setCredentials] = useState({ email: "", userName: "", password: ""});
    const [users, setUsers] = useState([])
    useEffect(()=> {
      APIManager.GetAll("users")
      .then((response) => {
        setUsers(response)
      })
    }, [])
    const handleRegister = (event) => {
        event.preventDefault();
        const userEmailInputValue = document.getElementById("email").value
        const userNameInputValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        const userConfirmPasswordValue = document.getElementById("confirmedPassword").value
        let userNameCheck = true;
        let userEmailCheck = true;
        users.forEach(user => {
            if (user.email === userEmailInputValue ) {
                userEmailCheck = false;
                if (user.userName === userNameInputValue){
                    userNameCheck = false;
                } 
            }   
        })
        let characterCheck= false
            if (userEmailCheck === true && userEmailInputValue !== "") {
                if (userNameCheck === true && userNameInputValue !== "") {
                    if (userPasswordValue === userConfirmPasswordValue && userPasswordValue !== "" ) {
                        
                        APIManager.Post("users", credentials) .then(() => {
                          APIManager.GetAll("users").then((response) => {
                            response.forEach(user => {
                              if(user.userName === userNameInputValue){
                                credentials.userId = user.id
                                
                                props.setUser(credentials)
                                    APIManager.GetAll("characters").then((response) => {
                                       
                                        response.forEach(character => {
                                          if(character.userId === parseInt(sessionStorage.activeUserID)){
                                              characterCheck = true
                                          }
                                        })
                                    }).then(()=> {
                                        if(characterCheck){
                                            props.history.push("/Dashboard")
                                          } else {
                                              props.history.push("/CharacterPrompt")
                                          }
                                    })
                                  
                              }
                            })
                          })
                        })
                       
                        
                    } else {
                       return (
                        window.alert("Passwords don't match.")
                              )
                    }
                } else {
                   return (
                    window.alert("Username is already in use.")
                          )
                }
            } else {
               return (
                      window.alert("Email already in use.")
                      )
            }
        
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }
    return (
      <div className="registerContainer">
        <Card className="registrationCard">
        <CardBody className="registrationCardBody">
          <CardImg
            className="registrationLogo"
            src=
                "http://res.cloudinary.com/dgllrw1m3/image/upload/v1596404968/Role_Out_D_ygzjys.png"
            alt="imgLogo"
          />
          <CardSubtitle className="registerWelcome">
            Please register below.
          </CardSubtitle>
          <Form className="registerForm" onSubmit={handleRegister}>
            <FormGroup>
              <Label className="registerEmailLabel">Email address</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </FormGroup>
            <FormGroup>
              <Label className="registerUsernameLabel">Username</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="userName"
                id="userName"
                placeholder="Enter Username"
              />
              
            </FormGroup>
            <FormGroup>
              <Label className="registerPasswordLabel">Password</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
              />
            </FormGroup>
            <FormGroup>
              <Label className="registerPasswordConfirmationLabel">
                Confirm Password
              </Label>
              <Input
                className="registerLogin"
                type="password"
                id="confirmedPassword"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <Button
              className="registrationButton"
              onClick={handleRegister}
              variant="custom"
              type="submit"
            >
              Register
            </Button>
          </Form>
          </CardBody>
        </Card>
      </div>
    );
}
export default Register