import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
    <MDBNavbar light bgColor='danger'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#' className="text-light">
          <img
          className="me-2"
            src='https://i.pinimg.com/originals/4d/e6/ea/4de6ea1808c96af78a95cf5104467ed4.gif'
            height='30'
            alt=''
            loading='lazy'
          />
          Counter App
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  </div>
  ) 
}

export default Header