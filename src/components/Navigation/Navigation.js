import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
// import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
