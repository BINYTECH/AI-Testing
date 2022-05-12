import React from 'react'
// import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../f s t.png'

const Navigation = () => {
  return (
    <div>
    
  <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>
    <Container>
    <Navbar.Brand href="#home">
    <img src={logo} width="50px" alt="fstimage" />
    SI</Navbar.Brand>

     <Navbar.Toggle />

    <Navbar.Collapse>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
      <Nav.Link href="/docs">Docs</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
 
 
    </div>
  )
}

export default Navigation