import styled from 'styled-components';

export const Table = styled.div`
  background-color: white;
  color: black;
  padding: 26px 23px;
  width: 100%;

  .header {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 18px;

    @media (min-width: 640px) {
      font-size: 20px;
    }
  }

  .list {
    padding: 0;
    border-top: 1px solid black;
  }
`;

export const Message = styled.div`
  color: white;
  p {
    margin: 0;
    line-height: 24px;
  }
`;
