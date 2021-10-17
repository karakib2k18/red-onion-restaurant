// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// const FoodDetails = () => {
//     const [singleFood, setSingleFood] = useState([]);
//     const { id } = useParams();
//     useEffect(() => {
//         fetch('./MealCart.json')
//             .then(res => res.json())
//             .then(data => setSingleFood(data))
//     }, [singleFood])
//     return (
//         <div>
//             <h1>FoodDetails=={ id}</h1>
//         </div>
//     );
// };

// export default FoodDetails;

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FoodDetails = () => {
    const { id } = useParams();
    // console.log(friendId);
    const [friend, setFriend] = useState({});
    const history = useHistory();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));

    }, [])
    const handleHistory = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h1>detsils coming soon {id}</h1>
            <h1>{friend?.name}</h1>
            <h1>{friend?.phone}</h1>
            <h1>{friend?.website}</h1>
            <h1>{friend?.company?.name}</h1>
            <button onClick={handleHistory}>see all friendls</button>
        </div>
    );
};

export default FoodDetails;