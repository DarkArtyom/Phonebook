import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

export const UserMenu = () => {
  //   const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button">Logout</button>
    </div>
  );
};

// onClick={() => dispatch(logOut)}
