import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"
import '../css/s_login.css'

export default function Login() {
  // const [data, setData] = useState({ email: "", password: "" });
	// const [error, setError] = useState("");

  // const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

  // const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:8080/api/auth";
	// 		const { data: res } = await axios.post(url, data);
	// 		localStorage.setItem("token", res.data);
	// 		window.location = "/dashboard";
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}
	// };
  return (
    <>
    <div className="main-grid1">
      <div className="grid-3">

      </div>

    <div className="image">
    <h1 className="log">Login</h1>
    <Form>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
							type="email" required name="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <NavLink to="/dashboard" className="btn1">
        Submit
      </NavLink>
      <p  className='para2'>Not Registered 
        <NavLink to="/signup" className='s_signup'>Registered</NavLink>
      </p>
    </Form>
    </div>
    </div>
    
    
    </>
  )
}
