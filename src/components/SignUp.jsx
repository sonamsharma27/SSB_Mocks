import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <>
    <div className="main-grid">
      <div className="grid-2">

      </div>

    <div className="image">
    <h1>Registeration</h1>
    <Form>
      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Name Of The Student</Form.Label>
        <Form.Control type="name" className='placeholder' placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" className='placeholder' placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="firstform" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  className='placeholder' placeholder="Password" />
      </Form.Group>
      <Button className='btn1' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    
    
    </>
  );
}

export default BasicExample;