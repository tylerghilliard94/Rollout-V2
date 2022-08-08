import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { Card, CardBody, CardImg, CardSubtitle, Form, FormGroup, Input, Button, Row, Col, Label, Alert } from "reactstrap";
import "./Login.css"
import { setStorage } from "../../Utils/BrowserStorage";
import { UserProfileContext } from "../../Providers/UserProvider";
import { login } from "../APIManagers/Auth/Login";


const Login = () => {
  const [user, setUser] = useState([])

  let navigate = useNavigate()
  const { isAuthenticated } = useContext(UserProfileContext)


  const handleLogin = (event) => {


    event.preventDefault();
    login(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {

          setStorage(res)
          isAuthenticated()
          navigate("/dashboard")
        }
        else {
          window.alert("Incorrect username/password")
        }
      })
  }
  const handleFieldChange = (event) => {
    const stateToChange = { ...user };
    stateToChange[event.target.name] = event.target.value;
    setUser(stateToChange);
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
                    name="username"
                    placeholder="Enter Username"
                  />
                </FormGroup>
                <FormGroup>
                  <Label className="loginPasswordLabel">Password</Label>
                  <Input className="loginForm"
                    onChange={handleFieldChange}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button
                  className="loginButton"
                  variant="custom"
                  type="submit">
                  Login
                </Button>
              </Col>
              <Col>
                <Button
                  className="registerButton"
                  variant="custom"
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