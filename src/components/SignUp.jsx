import React, { useRef,useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"

function BasicExample() {

  return (
    <>
    <div className="main-grid">
      <div className="grid-2">

      </div>

    <div className="image">
    <h1>Registeration</h1>
    <Form>
      <Form.Group id="firstform" className="firstform" controlId="formBasicEmail">
        <Form.Label>Name Of The Student</Form.Label>
        <Form.Control name="name" type="name" className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group id="email" className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group id="password" className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password"  className='placeholder' placeholder="Password" />
      </Form.Group>

      <Form.Group id="password-confirm" className="firstform" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name="password" type="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
      <p className='para'>Already Registered 
        <NavLink to="/s_login" className='s_login'>Login</NavLink>
      </p>
    </Form>
    </div>
    </div>
    
    
    </>
  );
}

export default BasicExample;