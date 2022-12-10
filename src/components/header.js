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

  const [searchTerm, setsearchTerm] = useState(" ");

  const searchItem = () => {};
  dishDetails
    .filter((val) => {
      val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    })
    .map((val) => {
      return (
        <>
          <div className="container" key={val.title}>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img alt="Sample" src={val.imageSrc} />
              <CardBody>
                <CardTitle tag="h5">{val.title}</CardTitle>
                <CardText>{val.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </>
      );
    });
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
