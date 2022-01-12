import styled from 'styled-components';

export const Select = styled.select`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  background-color: white;
  padding: 8px 10px;
  font-size: 12px;
  line-height: 18px;
  border: none;

  :required:invalid {
    color: var(--gray);
  }

  option[value=''][disabled] {
    display: none;
  }

  option {
    color: black;
  }
`;
