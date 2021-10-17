import React from 'react';
import Banner from '../Banner/Banner';
import MealCart from '../MealCart/MealCart';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealCart></MealCart>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;