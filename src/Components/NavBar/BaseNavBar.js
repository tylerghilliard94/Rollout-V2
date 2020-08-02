import React from "react"
import {NavLink} from "react-router-dom"
import {Image, Row, Col} from "react-bootstrap"

const BaseNavBar = props => {
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
                 {/* <Image placeholder="Logo">

                  </Image> */}
                  <h1>Logo Goes Here</h1>
                  </NavLink>
              </li>
              </Col>
              <Col sm={1}>
              <li>
              <NavLink className="LogoutNavLink" exact to= "/" onClick={handleLogout}> Logout </NavLink>
              </li>
              </Col>
              </Row>
          </ul>
        </header>
    )
}

export default BaseNavBar