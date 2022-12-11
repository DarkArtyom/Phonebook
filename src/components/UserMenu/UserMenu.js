import { selectUserName } from 'redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { UserMenuWrap, UserNameText } from './UserMenu.styled';

import { ButtonSubmit } from 'components/FormContacts/Form.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);
  return (
    <UserMenuWrap>
      <UserNameText>Welcome, {userName}</UserNameText>
      <ButtonSubmit type="button" onClick={() => dispatch(logOut())}>
        Log out
      </ButtonSubmit>
    </UserMenuWrap>
  );
};
