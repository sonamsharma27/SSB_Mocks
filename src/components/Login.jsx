<<<<<<< HEAD
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom"
import '../css/login.css'

export default function Login({setLoginUser}) {
  const history = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and authentication logic here
    if (username === 'admin' && password === 'password') {
      // Successful login
      setLoginUser();
      history('/admindash')
    } else {
      // Invalid credentials
      alert('Invalid username or password');
    }
  };
  return (
    <>
    <div className="main-grid">
      <div className="grid-3">

      </div>

    <div className="image">
    <h1 className='login_admin'>Login as Admin </h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name='name' value={username} onChange={handleUsernameChange} className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={handlePasswordChange}  className='placeholder' placeholder="Password" />
      </Form.Group>

    <Button to="/admindash" className="btn1" type='submit'>
        Submit
      </Button>
      
    </Form>
    </div>
    </div>
    
    
    </>
  )
}
=======
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom"
import '../css/login.css'

export default function Login({setLoginUser}) {
  const history = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and authentication logic here
    if (username === 'admin' && password === 'password') {
      // Successful login
      setLoginUser();
      history('/admindash')
    } else {
      // Invalid credentials
      alert('Invalid username or password');
    }
  };
  return (
    <>
    <div className="main-grid">
      <div className="grid-3">

      </div>

    <div className="image">
    <h1 className='login_admin'>Login as Admin </h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name='name' value={username} onChange={handleUsernameChange} className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={password} onChange={handlePasswordChange}  className='placeholder' placeholder="Password" />
      </Form.Group>

    <Button to="/admindash" className="btn1" type='submit'>
        Submit
      </Button>
      
    </Form>
    </div>
    </div>
    
    
    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
