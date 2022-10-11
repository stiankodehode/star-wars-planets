import { Nav, NavLink } from './styled';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AboutPage">About</NavLink>
      <NavLink to="/ContactPage">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
