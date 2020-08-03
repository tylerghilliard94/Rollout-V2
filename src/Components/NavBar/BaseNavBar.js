import React from "react"
import {NavLink} from "react-router-dom"
import {Image, Row, Col} from "react-bootstrap"
import "./BaseNavBar.css"

const BaseNavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        ;
      }

    return(
        <header>
          <ul id="nav-mobile" className="nav-Container right"  >
              <Row>
                  <Col sm={9}>
              <li>
              <NavLink className="homeLogo" exact to="/Dashboard"> 
                 <Image className="logoImg" src="https://res.cloudinary.com/dgllrw1m3/image/upload/v1596404968/Role_Out_D_ygzjys.png" placeholder="Logo"/>

                  
                  
                  </NavLink>
              </li>
              </Col><Col sm={2}>
              <li className="userNameTitle">
              <p>Welcome, {sessionStorage.activeUser}</p>
              </li>
              </Col>
              <Col sm={1}>
              <li className="logoutList">
              <NavLink className="LogoutNavLink" exact to= "/" onClick={handleLogout}> Logout </NavLink>
              </li>
              </Col>
              </Row>
          </ul>
        </header>
    )
}

export default BaseNavBar