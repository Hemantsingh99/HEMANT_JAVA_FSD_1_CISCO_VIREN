import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from './Home';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Navstyle from './Navstyle.css'


{/* <style>
    .d-flex{
             margin-left= "100px"
             padding-left= "34px"
    {'}'}
</style> */}

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#"> React Company </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="Home"  id="home">Home</Nav.Link>
                                    <Nav.Link href="AboutUs" id=" aboutus">About Us</Nav.Link>
                                    <NavDropdown title="Contact" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="ContactUs"> Contact Us</NavDropdown.Item>
                                        <NavDropdown.Item href="#"> Resouces</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Commends and Messages
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#" >
                                        My Card
                                    </Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>                  
                </div>
                <div>
                    <Switch>
                        <Route path="/AboutUs">
                            <AboutUs />
                        </Route>
                        <Route path="/ContactUs">
                            <ContactUs />
                        </Route>
                        <Route path="/Home">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

