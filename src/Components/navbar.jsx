import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';


function NavBar(){
    
    return (
        <>
            <Navbar bg="info" expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">Bad Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Nav.Link href = "#/" data-tip="Home page">Home</Nav.Link>
                        <ReactTooltip place="bottom" type="dark" effect="solid" />
                        <Nav.Link href ="#/createaccount" data-tip="Create a new account">Create Account</Nav.Link>
                        <Nav.Link href="#/login" data-tip="Login to an existing account">Login</Nav.Link>
                        <Nav.Link href ="#/deposit" data-tip="Deposit funds to your account">Deposit</Nav.Link>
                        <Nav.Link href ="#/withdraw" data-tip="Withdraw funds from your account">Withdraw</Nav.Link>
                        <Nav.Link href ="#/alldata" data-tip="View all history">All Data</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
    
}
export default NavBar;