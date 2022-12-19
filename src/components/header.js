import react, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
       <Navbar
       className="my-2"
       color="dark"
       dark>
        <NavbarBrand href="/">RestroYogi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/form">Feedback</NavLink>
            </NavItem>
            </Nav>
            </Collapse>
            </Navbar>
           
    </>
  )
}