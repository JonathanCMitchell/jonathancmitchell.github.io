/**
 * Created by jj on 2/3/17.
 */
import './NavBar.css'
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLink } from 'react-router'


const NavBar = (props) => {
     return (
            <div>
                <Navbar className="navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/">Home</IndexLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/aboutme">
                                <NavItem className="col-md-4" eventKey={1}>Aboutme</NavItem>
                            </LinkContainer>

                            <LinkContainer to="/resume">
                                <NavItem className="col-md-4" eventKey={2}>Resume</NavItem>
                            </LinkContainer>


                            <LinkContainer to="/research">
                                <NavItem eventKey={3}>Research</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/blog">
                                <NavItem className="col-md-4" eventKey={4}>Blog</NavItem>
                            </LinkContainer>

                            <LinkContainer to="/portfolio">
                                <NavItem className="col-md-4" eventKey={5}>Portfolio</NavItem>
                            </LinkContainer>


                            <LinkContainer to="/extra">
                                <NavItem eventKey={6}>Extra</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
}



export default NavBar