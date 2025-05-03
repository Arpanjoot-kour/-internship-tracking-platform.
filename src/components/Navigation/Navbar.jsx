import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();

    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Internship Platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/viewer" 
                            active={location.pathname === '/viewer'}
                        >
                            Viewer
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/student" 
                            active={location.pathname === '/student'}
                        >
                            Student
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/faculty" 
                            active={location.pathname === '/faculty'}
                        >
                            Faculty
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/admin" 
                            active={location.pathname === '/admin'}
                        >
                            Admin
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/management" 
                            active={location.pathname === '/management'}
                        >
                            Management
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation; 