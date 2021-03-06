import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import signUpLogo from '../../images/logo2.png';
import './SignUp.css'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Container className='pt-2 pb-5'>
                <Row className='d-flex align-items-center justify-content-center py-3 form-left'>
                    <Col sm={12} xs={12} md={4}>
                    </Col>
                    <Col sm={12} xs={12} md={4}>
                        <div><img className='mx-auto d-flex my-4' style={{ height: '4rem', width: '13rem' }} src={signUpLogo} alt="" /></div>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                            {errors.name && <span>This field is required</span>}

                            <input {...register("email", { required: true, maxLength: 20 })} placeholder="Your Email" />
                            {errors.email && <span>This field is required</span>}

                            <input {...register("password", { required: true, maxLength: 20 })} placeholder="Password" />
                            {errors.password && <span>This field is required</span>}
                            <input {...register("confpassword", { required: true, maxLength: 20 })} placeholder="Confirm Password" />
                            {errors.confpassword && <span>This field is required</span>}

                            <input type="submit" className='text-dark' value='SignUp' />
                        </form>
                        <Link className="text-red d-flex justify-content-center " to='/login'>Already Have an Account?</Link>
                    </Col>
                    <Col sm={12} xs={12} md={4}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;