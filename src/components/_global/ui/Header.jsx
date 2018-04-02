import React from 'react';
import Link from 'gatsby-link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import '../../../styles/_global/ui/Header.scss';

const Header = () => (
    <div className="header">

        <Navbar collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">recv.io</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <li role="presentation">
                        <Link role="button" to="/pricing/">Pricing</Link>
                    </li>
                    <NavDropdown title="Resources">
                        <li role="presentation">
                            <Link to="/docs/">Docs</Link>
                        </li>
                        <li role="presentation">
                            <Link to="/examples/">Examples</Link>
                        </li>
                        <li role="presentation">
                            <Link to="/compare/">Compare</Link>
                        </li>
                    </NavDropdown>
                    <li role="presentation">
                        <Link role="button" to="/dashboard/">Blog</Link>
                    </li>
                    <li role="presentation">
                        <Link role="button" to="/dashboard/">Dashboard</Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    </div>
);

export default Header;