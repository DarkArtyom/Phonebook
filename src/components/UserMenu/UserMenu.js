import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
