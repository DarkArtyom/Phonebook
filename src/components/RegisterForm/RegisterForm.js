import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
// import { register } from 'redux/auth/operations';
import {
  Forma,
  Label,
  Input,
  ButtonSubmit,
  FormWrap,
} from '../FormContacts/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" required />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" required />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" required />
        </Label>
        <ButtonSubmit type="submit">Register</ButtonSubmit>
      </Forma>
    </FormWrap>
  );
};
