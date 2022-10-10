import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 200px;
  box-shadow: 0 1px 8px #ddd;
  background-color: black;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  display: inline-block;
  padding: 0 20px;
  color: white;
`;
