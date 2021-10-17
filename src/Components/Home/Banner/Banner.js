import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
// import bannerLogo from '../../../images/bannerbackground.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner-img d-flex align-items-center justify-content-center mb-5">
                <div>
                    <h1 className="text-center mb-3">Best food waiting for your belly</h1>
                    <Form >
                        <Row className="gx-0 justify-content-center ">
                            
                            <Col xs="auto">
                                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                text
                            </Form.Label>
                                <Form.Control
                                    id="inlineFormInput"
                                    placeholder="Search food items"
                                    className='form-control shadow-none'
                                />

                            </Col>
                            <Col xs="auto">
                                <button type="submit" className='search-btn'>
                                    Search
                                </button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>

    );
};

export default Banner;