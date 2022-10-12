import { NavLink } from "./styled";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AboutPage">About</NavLink>
      <NavLink to="/ContactPage">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
