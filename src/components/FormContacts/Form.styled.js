import styled from 'styled-components';

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Forma = styled.form`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: lightblue;
  margin-bottom: 10px;
  padding-left: 10px;
  height: 30px;
`;

export const ButtonSubmit = styled.button`
  display: block;
  outline: none;
  border: none;
  min-width: 100px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: aqua;
  &:hover {
    background-color: aquamarine;
    transition: 250;
  }
`;
