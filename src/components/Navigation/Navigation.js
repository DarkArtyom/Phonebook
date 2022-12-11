import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationStyled>
      <NavLink class="link" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink class="link" to="/contacts">
          Contacts
        </NavLink>
      )}
    </NavigationStyled>
  );
};
