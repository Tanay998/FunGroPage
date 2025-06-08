// components/Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="bg-light border rounded-circle d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
            <span className="text-primary fw-bold">TP</span>
          </div>
          <span className="ms-2 h4 mb-0">TeenPath</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="main-nav" onClick={() => setExpanded(expanded ? false : true)} />
        
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/opportunities" onClick={() => setExpanded(false)}>Opportunities</Nav.Link>
          </Nav>
          <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
            <Button variant="warning" className="text-dark fw-bold">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;