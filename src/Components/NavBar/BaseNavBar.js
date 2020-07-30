import React from "react"
import {NavLink} from "react-router-dom"
import {Image} from "react-bootstrap"

const BaseNavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        ;
      }

    return(
        <header>
          <ul id="nav-mobile" className="nav-Container right"  >
              <li>
                  <Image>

                  </Image>
              </li>
              <li>
              <NavLink className="LogoutNavLink" exact to= "/" onClick={handleLogout}> Logout </NavLink>
              </li>
          </ul>
        </header>
    )
}

export default BaseNavBar