import react, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import DishDetails from "./DishDetails";
import { dishDetails } from "../dishDetails";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/">Restro</NavbarBrand>
        <form className="d-flex" role="search">
          <Link to={"/search"}>
            <button className="btn btn-outline-success" type="Search">
              Search
            </button>
          </Link>
        </form>
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
  );
}
