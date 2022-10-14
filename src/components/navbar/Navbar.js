import { NavbarLink, Nav } from "./styled";

const Navbar = () => {
    return (
        <Nav>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/AboutPage">About</NavbarLink>
            <NavbarLink to="/ContactPage">Contact</NavbarLink>
        </Nav>
    );
};

export default Navbar;
