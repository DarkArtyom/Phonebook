import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import {
  Forma,
  Label,
  Input,
  ButtonSubmit,
  FormWrap,
} from '../FormContacts/Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrap>
      <Forma onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <ButtonSubmit type="submit">Log In</ButtonSubmit>
      </Forma>
    </FormWrap>
  );
};
