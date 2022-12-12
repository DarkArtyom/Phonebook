import { selectUserName } from 'redux/auth/authSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
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
