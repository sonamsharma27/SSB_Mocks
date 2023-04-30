import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom"
import '../css/s_login.css'

export default function Login({setLoginUser}) {
  const history = useNavigate()
  const [ user, setUser] = useState({
    email:"",
    password:""
})

const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}

const login = () => {
  axios.post("http://localhost:5000/s_login", user)
  .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      history("/dashboard")
  })
}

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
    <Form action="POST">
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
							type="email" value={user.email} onChange={handleChange} required name="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={user.password} onChange={handleChange} required type="password" name="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <Button to="/dashboard" className="btn1" onClick={login}>
        Submit
      </Button>
      <p  className='para2'>Not Registered 
        <NavLink to="/signup" className='s_signup'>Registered</NavLink>
      </p>
    </Form>
    </div>
    </div>
    
    
    </>
  )
}