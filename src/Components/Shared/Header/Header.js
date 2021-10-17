import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import headerLogo from '../../../images/logo2.png'
import './Header.css'
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const { user, logOut } = useAuth();
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
                            <NavLink as={HashLink} className="nav-link" activeStyle={headerStyle} to="/home#Dinner">Dinner</NavLink>

                            {
                                user.displayName && <img style={{ height: '2rem', width: '2rem' }} src={user.photoURL} alt="" />
                            }
                            {
                                user.displayName ? <p className="nav-link">{user.displayName}</p> : <NavLink className="nav-link" activeStyle={headerStyle} to="/signup">SignUp</NavLink>
                            }
                            {
                                user.displayName ? <Button onClick={logOut} variant="light">Logout</Button> : <NavLink className="nav-link" activeStyle={headerStyle} to="/login">Login</NavLink>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;