import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  width: 50%;
  margin-left: 13px;
  color: white;
  background-color: transparent;
  font-weight: 700;
  line-height: 18px;
  border: solid white 2px;
  cursor: pointer;

  :disabled {
    background-color: var(--fadedRed);
    color: #ffcfcf;
  }
`;
