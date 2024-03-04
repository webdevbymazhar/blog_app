import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./common.css"
import LogInSignUpNavbar from '../components/LogInSignUpNavbar';


const Register = () => {
  return (
  <div>
    <>
    <div>

    <LogInSignUpNavbar/>
      
    <Form style={{marginTop:"50px",height:"500px"}} className='mx-auto'>
    <h4 className='text-center'>REGISTER</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username : </Form.Label>
        <Form.Control type="email" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email Address : </Form.Label>
        <Form.Control type="text" placeholder="Enter Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      
      <Button style={{marginTop:"15px",width:"100%"}} variant="primary" type="submit">
        Register
      </Button>
      <p className='text-center mt-4 '>Already A User ? <Link to={"/login"} style={{textDecoration:"none"}}>Log In</Link></p>
    </Form>
    </div>
    </>
  </div>
   
  )
}

export default Register
