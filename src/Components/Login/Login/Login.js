// import React from 'react';
// import useAuth from '../../../Hooks/useAuth';

// const Login = () => {
//     const { signInUsingGoogle } = useAuth();
//     return (
//         <div>
//             <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
//         </div>
//     );
// };

// export default Login;

import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import LoginLogo from '../../../images/logo2.png';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container className='pt-2 pb-5'>
                <Row className='d-flex align-items-center justify-content-center py-3 form-left'>
                    <Col sm={12} xs={12} md={4}>
                    </Col>
                    <Col sm={12} xs={12} md={4}>
                        <div><img className='mx-auto d-flex my-4' style={{ height: '4rem', width: '13rem' }} src={LoginLogo} alt="" /></div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email", { required: true, maxLength: 20 })} placeholder="Your Email" />
                            {errors.email && <span>This field is required</span>}

                            <input {...register("password", { required: true, maxLength: 20 })} placeholder="Password" />
                            {errors.password && <span>This field is required</span>}
                            <input type="submit" className='text-dark' value='Login' />

                        </form>
                        <div>
                            <button onClick={signInUsingGoogle} className="btn btn-warning d-flex mx-auto">Google Sign In</button>
                        </div>
                    </Col>
                    <Col sm={12} xs={12} md={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;