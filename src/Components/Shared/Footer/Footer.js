import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import footerLogo from '../../../images/logo.png';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <Container>
                    <Row className="mb-3">
                        <Col xs={3} md={6} lg={6}>
                            <img
                                src={footerLogo} alt=""
                                width="150"
                                height="45"

                            />
                        </Col>
                        <Col xs={5} md={3} lg={3}>
                            <ul>
                                <li>About Online food</li>
                                <li>Read our blog</li>
                                <li>Sign up to deliver</li>
                                <li>Add your restaurant</li>
                            </ul>
                        </Col>
                        <Col xs={4} md={3} lg={3}>
                            <ul>
                                <li>Get help</li>
                                <li>Read FAQs</li>
                                <li>View all cities</li>
                                <li>Restaurants near me</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} md={6} lg={6}>
                            <p>Copyright © 2020 KAZI ABDUR RAKIB</p>
                        </Col>
                        <Col xs={3} md={2} lg={2}>
                            <p>Privacy Policy</p>
                        </Col>
                        <Col xs={3} md={2} lg={2}>
                            <p>Terms of Use</p>
                        </Col>
                        <Col xs={2} md={2} lg={2}>
                            <p>Pricing</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;