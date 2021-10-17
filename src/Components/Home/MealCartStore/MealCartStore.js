import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MealCartStore.css'

const MealCartStore = (props) => {
    const { title, description, price, tag, img, id } = props.meal;
    const url = `food/${id}`;
    return (
        <>
            <Col>
                <Card className='shadowhover mb-4'>
                    <h6> <span className='tag-color'>{tag} </span></h6>
                    <Card.Img variant="top" className="rounded-circle mx-auto d-block text-center" src={img} style={{ height: '12rem', width: '12rem' }} />
                    <Card.Body className='text-center'>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0,67)}
                        </Card.Text>
                        <Card.Title>$ {price}</Card.Title>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        {/* <button className=" btn order-now ">Order Now</button> */}
                        <Link className=" btn order-now " to={url}>Order Now</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    );
};

export default MealCartStore;