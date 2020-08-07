import React from "react"
import {NavLink} from "react-router-dom"
import {Image, Row, Col} from "react-bootstrap"

const CharacterNavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        ;
      }

    return(
        <header>
          <ul id="nav-mobile" className="nav-Container right"  >
              <Row>
                  <Col sm={11}>
              <li>
              <NavLink className="homeLogo" exact to="/Dashboard"> 
                 <Image className="logoImg" src="https://res.cloudinary.com/dgllrw1m3/image/upload/v1596404968/Role_Out_D_ygzjys.png" placeholder="Logo"/>

                  
                  
                  </NavLink>
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

export default CharacterNavBar