import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

//Navigation bar component
export default function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href='/'>Web Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Projects List</Nav.Link>
                    <Nav.Link href="/add">Add</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}