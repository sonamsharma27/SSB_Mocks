import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"
import '../s_login.css';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
  }
  return (
    <>
    <div className="main-grid1">
      <div className="grid-3">

      </div>

    <div className="image">
    <h1>Login</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
      <p  className='para2'>Not Registered 
        <NavLink onClick={() => props.onFormSwitch('register')} to="/signup" className='s_signup'>Registered</NavLink>
      </p>
    </Form>
    </div>
    </div>
    
    
    </>
  )
}
