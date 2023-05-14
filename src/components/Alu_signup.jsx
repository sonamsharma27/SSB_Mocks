import React, { useRef,useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink,useNavigate  } from "react-router-dom"

function Alu_signup() {
    const history = useNavigate()
    const [ user, setUser] = useState({
      name: "",
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
  
  const register = () => {
    const { name, email, password } = user
    if( name && email && password){
        axios.post("http://localhost:5000/alu_signup", user)
        .then( res => {
            alert(res.data.message)
            history("/alu_login")
        })
    } else {
        alert("invalid input")
    }
    
  }
  
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
          <Form.Label>Name Of The Alumni</Form.Label>
          <Form.Control value={user.name} onChange={ handleChange } name="name" required type="name" className='placeholder' placeholder="Enter name" />
        </Form.Group>
  
        <Form.Group id="email" className="firstform" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={user.email} onChange={ handleChange } name="email" type="email" required className='placeholder' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group id="password" className="firstform" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={user.password} onChange={ handleChange } required name="password" type="password"  className='placeholder' placeholder="Password" />
        </Form.Group>
        <Button className='btn9' variant="primary" onClick={register}>
          Submit
        </Button>
        <p className='para'>Already Registered 
          <NavLink to="/alu_login" className='s_login'>Login</NavLink>
        </p>
      </Form>
      </div>
      </div>
      
      
      </>
    );
}
export default Alu_signup