import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 200px;
  box-shadow: 0 1px 8px #ddd;
  background-color: black;
`;

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 20px;
  color: white;

  &:hover,
  &:focus {
    color: yellow;
  }
  &:active {
    color: yellow;
  }
`;
