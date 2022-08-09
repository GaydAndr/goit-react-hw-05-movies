import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
`;

export const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: 0;
  padding: 0 10px;
  cursor: pointer;
  display: inline-block;
  height: 48px;
  outline: none;
`;
export const Input = styled.input`
  // border: none;
  display: inline-block;
  font: inherit;
  font-size: 20px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  width: 100%;
`;
