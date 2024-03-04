import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const CommonNavbar = () => {
  let router = useNavigate()
  const submit = () => {
    confirmAlert({
      title: 'Log Out',
      message: 'Are you sure you want to logout ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => router("login/")
        },
        {
          label: 'No',
          onClick: () => router("/")
        }
      ]
    });
  };
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home"><p style={{fontSize:"25px",marginTop:"15px",fontWeight:"bold"}}>BLOG IT UP</p> </Navbar.Brand>
          <Nav >
            <Nav.Link active style={{fontSize:"20px"}} ><Link style={{textDecoration:"none",color:"white"}}>Home</Link></Nav.Link>
            <Nav.Link style={{fontSize:"20px"}} ><Link style={{textDecoration:"none",color:"gray"}}>About</Link></Nav.Link>
            <Nav.Link style={{fontSize:"20px"}}><Link style={{textDecoration:"none",color:"gray"}}>Contact</Link></Nav.Link>
            <Nav.Link style={{fontSize:"20px"}}><Link style={{textDecoration:"none",color:"gray"}}>Blogs</Link></Nav.Link>
            <button onClick={submit} style={{borderRadius:"10px",backgroundColor:"white",marginLeft:"30px",padding:"0px 15px"}}><Nav.Link style={{fontSize:"18px"}}><Link style={{textDecoration:"none",color:"#4c96ff",fontWeight:"bold"}}>LOG OUT</Link></Nav.Link></button>
          </Nav>
        </Container>
      </Navbar>
     
      
    
    </div>
  )
}

export default CommonNavbar
