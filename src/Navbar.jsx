import { Navbar, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

function DogNavbar() {
  return (
    <Navbar expand="md">
      <NavLink to="/dogs" className="navbar-brand">
        Snack or Booze
      </NavLink>
      <Nav>
        <NavItem>
          <NavLink to="/dogs/duke">Duke</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dogs/perry">Perry</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dogs/tubby">Tubby</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/dogs/whiskey">Whiskey</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default DogNavbar;
