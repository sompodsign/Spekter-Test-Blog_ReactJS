import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar  variant="dark">
                    <Navbar.Brand href="#">Test-Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/create-new">Create New Post</Nav.Link>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default Header
