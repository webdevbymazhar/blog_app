import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const LogInSignUpNavbar = () => {
  return (
    <div>
       <Container fluid style={{padding:"0px 0px"}} >
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand  ><p style={{fontWeight:"bold",fontSize:"25px",paddingTop:"5px"}}>BLOG IT UP !</p></Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </div>
  )
}

export default LogInSignUpNavbar
