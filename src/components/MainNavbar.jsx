import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import MainNavLink from "./MainNavLink";

function MainNavbar() {
const links = [
  {
  name : "Home" ,
  path :"/"
},
{
name : "About" ,
  path :"/about"
},
{
name : "Error" ,
  path :"/*"
},
{
  name :" Content",
  path:"/content"
},
{
  name :" Registration",
  path:"/registration"
},
{
  name:"LogIn",
  path:"/login"
},
{
  name:"Student",
  path:"/student"
},
{
  name:"counter",
  path:"/counter"
},
{
  name:"Proudects",
  path:"/proudects"
}
]

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          {links.map((link , index) => (
            <MainNavLink key={index} {...link} />
          )) }

          
            {/* <MainNavLink name="Home" path="/" />
            <MainNavLink name="About" path="/about"/>
            <MainNavLink name="Error" path="/*"/> */}
            {/* <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/*">Error404</NavLink> */}

            
          </Nav>
          <Form className="d-flex">
            <Form.Control
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
  );
}

export default MainNavbar;