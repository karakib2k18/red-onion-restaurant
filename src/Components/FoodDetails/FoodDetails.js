import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FoodDetails.css'
const FoodDetails = () => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    let { foodId } = useParams();
    const [singleFood, setSingleFood] = useState([]);
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }

    useEffect(() => {
        fetch('/MealCard.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // eslint-disable-next-line eqeqeq
                const singleFoodDetails = data.find(fd => fd.id == foodId);
                setSingleFood(singleFoodDetails);
                // console.log(singleFoodDetails)

            })
    }, [foodId])

    console.log(singleFood)
    return (
        <div>
            <Container style={{ maxWidth: '980px' }}>
                <Row className='d-flex align-items-center justify-content-center py-4'>
                    <Col sm={6} xs={6} md={6}>
                        <h1> {singleFood.title}</h1>
                        <p>{singleFood.description}</p>
                        <div className="d-flex">
                            <h4 className='mt-2'>${singleFood.price * counter}</h4>
                            <div className='ms-3 inc-dinc'>
                                <input onClick={decrementCounter} className='button' type="button" value="-" />
                                <input type="text" value={counter} className="inputedit" id="" />
                                <input onClick={incrementCounter} className='button' type="button" value="+" />
                            </div>
                        </div>
                        <Link to='/placeorder'> <button className='mt-3 btn singleCart'>{element} Add</button></Link>
                    </Col>
                    {/* <Col sm={1} xs={1} md={1}></Col> */}
                    <Col sm={6} xs={6} md={6}> <Image src={singleFood.img} alt="" fluid /></Col>
                </Row>
            </Container>
        </div>
    );
};


export default FoodDetails;














// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router';

// const FoodDetails = () => {
//     const { id } = useParams();
//     // console.log(friendId);
//     const [friend, setFriend] = useState({});
//     const history = useHistory();
//     useEffect(() => {
//         const url = `https://jsonplaceholder.typicode.com/users/${id}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setFriend(data));

//     }, [])
//     const handleHistory = () => {
//         history.push('/friends')
//     }
//     return (
//         <div>
//             <h1>detsils coming soon {id}</h1>
//             <h1>{friend?.name}</h1>
//             <h1>{friend?.phone}</h1>
//             <h1>{friend?.website}</h1>
//             <h1>{friend?.company?.name}</h1>
//             <button onClick={handleHistory}>see all friendls</button>
//         </div>
//     );
// };

// export default FoodDetails;