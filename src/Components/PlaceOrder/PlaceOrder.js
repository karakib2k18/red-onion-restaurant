import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>

            <Container >
                <Row className='d-flex align-items-center justify-content-center py-4 form-left my-5'>
                    <Col sm={1} xs={1} md={1}>
                    </Col>
                    <Col sm={5} xs={5} md={5}>
                        <h2 className='delivey-title'>Edit Delivery Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* <input defaultValue="" {...register("example")} placeholder="Your Name" /> */}

                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />

                            {errors.name && <span>This field is required</span>}

                            <input {...register("email", { required: true, maxLength: 20 })} placeholder="Your Email" />

                            {errors.email && <span>This field is required</span>}
                            <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Your Phone no." />

                            {errors.phone && <span>This field is required</span>}
                            <input {...register("address", { required: true, maxLength: 20 })} placeholder="Address" />

                            {errors.address && <span>This field is required</span>}
                            <input {...register("delivetInstruction", { required: true, maxLength: 20 })} placeholder="Add Delivey Instruction" />

                            {errors.delivetInstruction && <span>This field is required</span>}


                            <input type="submit" className='text-dark' value='Save & Continue' />
                        </form>
                    </Col>
                    <Col sm={2} xs={2} md={2}>
                    </Col>
                    <Col sm={3} xs={3} md={3}>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue="test" {...register("example")} />

                            <input {...register("exampleRequired", { required: true })} />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" className='text-dark' value='Save & Continue' />
                        </form>
                    </Col>
                    <Col sm={1} xs={1} md={1}>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;