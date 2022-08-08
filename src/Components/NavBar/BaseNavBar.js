import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Image, Row, Col } from "react-bootstrap"
import "./BaseNavBar.css"
import { UserProfileContext } from "../../Providers/UserProvider"

const BaseNavBar = props => {
    const { currentUser, setCurrentUser } = useContext(UserProfileContext)
    const handleLogout = () => {
        clearUser();

    }
    const clearUser = () => {
        setCurrentUser({})
        sessionStorage.clear();
        localStorage.clear();

    }
    return (
        <header>
            <ul id="nav-mobile" className="nav-Container right"  >
                <Row>
                    <Col sm={9}>
                        <li>
                            <NavLink className="homeLogo" to="/dashboard">
                                <Image className="logoImg" src="http://res.cloudinary.com/dgllrw1m3/image/upload/v1596723032/Role_Out_D_white_ebgssw.png" placeholder="Logo" />



                            </NavLink>
                        </li>
                    </Col><Col sm={2}>
                        <li className="userNameTitle">
                            <p>Welcome, {currentUser?.username}</p>
                        </li>
                    </Col>
                    <Col sm={1}>
                        <li className="logoutList">
                            <NavLink className="LogoutNavLink" to="/login" onClick={handleLogout}> Logout </NavLink>
                        </li>
                    </Col>
                </Row>
            </ul>
        </header>
    )
}

export default BaseNavBar