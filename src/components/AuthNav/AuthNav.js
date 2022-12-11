import { NavLink } from 'react-router-dom';
import { AuthNavWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrap>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthNavWrap>
  );
};
