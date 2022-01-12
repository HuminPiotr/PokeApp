import styled from 'styled-components';

export const Item = styled.li`
  border-bottom: 1px solid black;
  font-size: 12px;
  display: flex;

  .nameField {
    width: 60%;
    line-height: 18px;
    padding: 6px 10px;
    border-right: 1px solid black;
  }

  .deleteField {
    width: 40%;

    text-align: center;

    .deleteButton {
      border: 0;
      color: var(--secondRed);
      text-decoration: underline;
      font-size: 12px;
      line-height: 18px;
      font-weight: 700;
      padding: 6px 10px;
      background: none;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        color: var(--darkRed);
      }
    }
  }
`;
