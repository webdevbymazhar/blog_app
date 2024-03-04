import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./common.css"
import LogInSignUpNavbar from '../components/LogInSignUpNavbar';





const Login = () => {

 
  
  return (
    <div>
    <LogInSignUpNavbar/>
    <div className='container-fluid'>
      
    <Form className='mx-auto'>
    <h4 className='text-center'>LOG IN</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address : </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password : </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button style={{marginTop:"15px",width:"100%"}} variant="primary" type="submit">
        Log In
      </Button>
      <p className='text-center mt-4 '>Not A User ? <Link to={"/register"} style={{textDecoration:"none"}}>Register</Link></p>
    </Form>
    </div>
    
    </div>
    
  )
}

export default Login
