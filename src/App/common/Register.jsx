import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


const Register = () => {
  return (
  <div>
    <>
    <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

        <h2 className="fw-bold mb-2 text-center">Register </h2>
        <p className="text-white-50 mb-3">Please enter your login and password!</p>

        
        <MDBInput wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='text' size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

  

        <MDBBtn size='lg'>
          Register
        </MDBBtn>

        <hr className="my-4" />

        <p className='text-center'>Already Have An Account ? <Link to={"/login"}>Log In</Link></p>


      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </>
  </div>
   
  )
}

export default Register
