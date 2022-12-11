// import { NavLink } from 'react-router-dom';
import { AuthNavWrap, StyledLink } from './AuthNav.styled';

// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <AuthNavWrap>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </AuthNavWrap>
  );
};
