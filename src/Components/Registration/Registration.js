import React, { useState, useEffect, useContext } from "react";
import { Form, FormGroup, Label, Button, Card, Alert, CardImg, CardBody, CardSubtitle, Input, Col } from "reactstrap";
import { register } from "../APIManagers/Auth/Register";
import { setStorage } from "../../Utils/BrowserStorage"
import { useNavigate } from "react-router-dom"
import "./Registration.css";
import { UserProfileContext } from "../../Providers/UserProvider";



const Register = (props) => {
  let navigate = useNavigate()

  const [user, setUser] = useState({})

  const { isAuthenticated } = useContext(UserProfileContext)

  const handleRegister = (event) => {
    event.preventDefault();

    if (user.password === user.confirmedPassword) {
      register(user)
        .then(res => {


          setStorage(res)
          isAuthenticated()
          navigate("/dashboard")
        })
    }


  }
  const handleFieldChange = (event) => {
    const stateToChange = { ...user };
    stateToChange[event.target.name] = event.target.value;
    setUser(stateToChange);
  }
  return (
    <Col className="registerContainer">
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
              <Label className="registerEmailLabel">Email Address</Label>
              <Input
                className="registerLogin"
                onChange={handleFieldChange}
                type="email"
                id="email"
                name="email"
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
                name="userName"
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
                name="password"
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
                name="confirmedPassword"
                placeholder="Confirm Password"
              />
            </FormGroup>
            <Button
              className="registrationButton"
              variant="custom"
              type="submit"
            >
              Register
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}
export default Register