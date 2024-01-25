import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/' className='brand'>
          TV Show
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/' className='nav_link'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/movies' className='nav_link'>
              Movies
            </Nav.Link>

            <Nav.Link as={Link} to='/tvseries' className='nav_link'>
              TV Series
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className='nav_link'>
              About
            </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button as={Link} to='/search' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
