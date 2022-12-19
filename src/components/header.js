import react, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  let nevigate=()=>{
    navigate('/search')
  }
  return (
    <>
       <Navbar
       className="my-2"
       color="dark"
       dark>
        <NavbarBrand href="/">Restro</NavbarBrand>
        <Button className="ms-auto" onClick={nevigate}>Search</Button>
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