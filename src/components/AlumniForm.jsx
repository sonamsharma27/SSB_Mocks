<<<<<<< HEAD
import React, { useRef,useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink,useNavigate  } from "react-router-dom"

export default function AlumniForm() {
  return (
    <>
    <div className="image">
    <h1>Beneficiary Details</h1>
    <Form> 
      <Form.Group id="firstform" className="firstform" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" required type="name" className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group id="email" className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required className='placeholder' placeholder="Enter email" />
      </Form.Group>

     
      <Form.Group type="file">Upload Contents</Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
    
    </>
  )
}
=======
import React, { useRef,useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink,useNavigate  } from "react-router-dom"

export default function AlumniForm() {
  return (
    <>
    <div className="image">
    <h1>Beneficiary Details</h1>
    <Form> 
      <Form.Group id="firstform" className="firstform" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" required type="name" className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group id="email" className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" required className='placeholder' placeholder="Enter email" />
      </Form.Group>

     
      <Form.Group type="file">Upload Contents</Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
    
    </>
  )
}
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
