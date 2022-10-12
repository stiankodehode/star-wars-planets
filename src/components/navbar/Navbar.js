import { NavbarLink, Nav } from './styled';

const Navbar = () => {
  return (
    <Nav>
      <NavbarLink></NavbarLink>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/AboutPage">About</NavbarLink>
      <NavbarLink to="/AboutPage">Planets</NavbarLink>
      <NavbarLink to="/ContactPage">Contact</NavbarLink>
    </Nav>
  );
};

export default Navbar;
