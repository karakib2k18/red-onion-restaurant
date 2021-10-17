import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MealCartStore from '../MealCartStore/MealCartStore';
// import { Link, Link } from 'react-router-dom';
import './MealCart.css'

const MealCart = () => {
    const [meals, setMeals] = useState([]);
    const [foodTag, setFoodTag] = useState('Breakfast');
    const [isShowSpinner, setIsShowSpinner] = useState(true);

    useEffect(() => {
        fetch('./MealCard.json')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
                setIsShowSpinner(false);
            });
    }, []);
    const resultsOfFoodTag = meals.filter(meal => meal.tag === foodTag);
    return (
        <div>
            <div className='d-flex justify-content-center gap-4 mt-5 mb-5 mx-auto'>
                <Link id='Breakfast' onClick={() => setFoodTag('Breakfast')} to="/home#Breakfast">
                    <span className={foodTag === 'Breakfast' ? 'active-link-tag' : 'inactive-link-tag'} >Breakfast</span>
                </Link>

                <Link id='Lunch' onClick={() => setFoodTag('Lunch')} className="inactive-link-tag" to="/home#Lunch">
                    <span className={foodTag === 'Lunch' ? 'active-link-tag' : 'inactive-link-tag'} >Lunch</span>
                </Link>

                <Link id='Dinner' onClick={() => setFoodTag('Dinner')} className="inactive-link-tag" to="/home#Dinner">
                    <span className={foodTag === 'Dinner' ? 'active-link-tag' : 'inactive-link-tag'} >Dinner</span>
                </Link>

            </div>
            <Container style={{ maxWidth: '980px' }}>
                {isShowSpinner && (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border  " role="status">
                            <span className="visually-hidden ">Loading...</span>
                        </div>
                    </div>
                )}
                <Row xs={1} md={3} className="g-4">
                    {resultsOfFoodTag.map(meal => (
                        <MealCartStore meal={meal} key={meal.id}></MealCartStore>
                    ))}
                </Row>
            </Container>

        </div>
    );
};

export default MealCart;