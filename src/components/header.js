import react from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

export default function Header() {
  return (
    <>
        <Navbar
          className="my-2"
          color="dark"
          dark
        >
      <NavbarBrand href="/">
        My website
      </NavbarBrand>
    </Navbar>
    </>
  )
}