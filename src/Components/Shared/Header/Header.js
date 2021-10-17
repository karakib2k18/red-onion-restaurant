import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../../images/logo2.png'
import './Header.css'
const Header = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    const headerStyle = {
        borderRadius: '25px',
        padding: '7px 25px',
        fontWeight: "bold",
        color: "white",
        textDecoration: 'none',
        backgroundColor: 'red',
        display: ' inline-block'
    };
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/home" ><img
                        alt=""
                        src={headerLogo}
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                    /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">

                            <NavLink className="nav-link" activeStyle={headerStyle} to="/placeorder">{element}</NavLink>
                            <NavLink className="nav-link" activeStyle={headerStyle} to="/home">Home</NavLink>
                            <NavLink className="nav-link" activeStyle={headerStyle} to="/login">Login</NavLink>
                            <NavLink className="nav-link" activeStyle={headerStyle} to="/signup">SignUp</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;