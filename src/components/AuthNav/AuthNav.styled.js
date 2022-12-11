import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  color: black;
  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: green;
    color: black;
  }
`;
