import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  border: 1px solid black;

  width: auto;
  font: inherit;
`;
export const SearchBtn = styled.button`
  margin-left: 10px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 4px;
  width: 80px;
  height: auto;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  :hover {
    color: white;
    background-color: orangered;
    border-color: orangered;
  }
`;
