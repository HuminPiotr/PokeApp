import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 333px;
  margin: auto;

  @media (min-width: 600px) {
    max-width: 463px;
  }
`;

export const LinkForm = styled(Link)`
  padding: 3% 6%;
  width: 50%;
  margin-right: 13px;
  color: var(--darkRed);
  background-color: white;
  font-weight: 700;
  line-height: 18px;
  border: solid white 2px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 30px auto;
  justify-content: space-between;
  max-width: 463px;
`;
