import React from 'react';
import Link from 'gatsby-link';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import recvLogo from '../../../assets/img/home/recv.io.png';

import '../../../styles/_global/ui/Header.scss';

const Header = (props) => (
    <div className="header">

        <Navbar collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/"><img src={recvLogo} alt="recv.io"/></Link>
                </Navbar.Brand>
                {/*<Navbar.Toggle />*/}
            </Navbar.Header>
            {/*<Navbar.Collapse>*/}
                {/*<Nav pullRight>*/}
                    {/*<li role="presentation">*/}
                        {/*<Link role="button" to="/pricing/">Pricing</Link>*/}
                    {/*</li>*/}
                    {/*<NavDropdown title="Resources" id="resources">*/}
                        {/*<li role="presentation">*/}
                            {/*<Link to="/docs/">Docs</Link>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<Link to="/examples/">Examples</Link>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<Link to="/compare/">Compare</Link>*/}
                        {/*</li>*/}
                    {/*</NavDropdown>*/}
                    {/*<li role="presentation">*/}
                        {/*<Link role="button" to="/blog/">Blog</Link>*/}
                    {/*</li>*/}
                    {/*<li role="presentation">*/}
                        {/*<Link className="btn btn-dashboard" role="button" to="/dashboard/"><span className="icon-my-apps"></span>{props.user ? props.user.displayName : 'Dashboard'}</Link>*/}
                    {/*</li>*/}
                {/*</Nav>*/}
            {/*</Navbar.Collapse>*/}
        </Navbar>

    </div>
);

export default Header;