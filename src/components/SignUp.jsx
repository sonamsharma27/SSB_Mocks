import React, { useRef,useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink,useNavigate  } from "react-router-dom"

function BasicExample() {
  // const [data, setData] = useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// });

  // const [error, setError] = useState("");
	// const navigate = useNavigate();

  // const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

  // const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:8080/api/users";
	// 		const { data: res } = await axios.post(url, data);
	// 		navigate("/s_login");
	// 		console.log(res.message);
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
    <div className="main-grid">
      <div className="grid-2">

      </div>

    <div className="image">
    <h1>Registration</h1>
    <Form> 
      <Form.Group id="firstform" className="firstform" controlId="formBasicEmail">
        <Form.Label>Name </Form.Label>
        <Form.Control name="name" required type="name" className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group id="email" className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group id="password" className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required name="password" type="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
      <p className=''><NavLink to="/s_login" className='s_login'><b>Already registered? Login here</b></NavLink>
      </p>
    </Form>
    </div>
    </div>
    
    
    </>
  );
}

export default BasicExample;