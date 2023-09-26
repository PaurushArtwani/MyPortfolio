import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
const NavbarContainer=()=>{

    return( <NabvarSection>
                <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                        <Navbar.Brand>React</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Works</Nav.Link>
                        <Nav.Link href="#home">Services</Nav.Link>
                        <NavDropdown title="Pages" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home">About</Nav.Link>
                        <NavDropdown title="Blogs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button>Lets Talk</Button>
            </Container>

                        </Navbar>

        </NabvarSection>);
    }

    const NabvarSection = styled.div`
.navbar-brand{
    color:#db9a64!important;
    font-size:28px!important;
    font-weight:bold;
}
.nav-link{
    color:#db9a64!important;
    font-size:16px;
    padding-right: 30px!important;
}
.navbar-collapse.collapse {
    display: flex!important;
    justify-content: center

}
button{
    background: transparent;
    font-family: "Roboto", sans-serif;
    padding: 14px 49px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #DB9A64;
    color: #DB9A64;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
}
button:hover{
    background: #DB9A64;
     animation-delay: 100s;
}


`
export default NavbarContainer;