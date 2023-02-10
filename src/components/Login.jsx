import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"
import '../login.css';

export default function Login() {
  return (
    <>
    <div className="main-grid">
      <div className="grid-3">

      </div>

    <div className="image">
    <h1>Login as Admin </h1>
    <Form>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  className='placeholder' placeholder="Password" />
      </Form.Group>

    <NavLink to="/dashboard">
      <Button className="btn1" variant='primary' type='submit'>Submit</Button>
        
      </NavLink>
      
    </Form>
    </div>
    </div>
    
    
    </>
  )
}