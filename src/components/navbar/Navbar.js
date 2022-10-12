<<<<<<< HEAD
import { NavbarLink, Nav } from './styled';

const Navbar = () => {
  return (
    <Nav>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/AboutPage">About</NavbarLink>
      <NavbarLink to="/AboutPage">Planets</NavbarLink>
      <NavbarLink to="/ContactPage">Contact</NavbarLink>
    </Nav>
=======
import { NavLink } from "./styled";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AboutPage">About</NavLink>
      <NavLink to="/ContactPage">Contact</NavLink>
    </nav>
>>>>>>> development
  );
};

export default Navbar;
