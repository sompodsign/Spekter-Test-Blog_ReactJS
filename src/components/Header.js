import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar  variant="dark">
                    <Navbar.Brand>Test-Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/create-new">Create New Post</Link>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default Header
