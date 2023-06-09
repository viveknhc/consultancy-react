import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Logo from '../components/assets/images/logo.png';

import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
    return (
        <Navbar className='main-nav py-3' expand="lg">
            <Container>
                <Navbar.Brand href="#home">


                    <img src={Logo} width="120" height="50" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink className="nav-item" to="/">Home</NavLink></Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-item" to="About">About</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="nav-item" to="a">Contact</NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink className="nav-item" to="ab">Testimonial</NavLink>
                        </Nav.Link>

                        <Nav.Link>
                            <NavLink className="nav-item" to="Users">Users</NavLink>
                        </Nav.Link>
                    </Nav>

                    <Button className='get-start-btn'>Get started</Button>
                </Navbar.Collapse>

              
            </Container>
        </Navbar>
    )
}
