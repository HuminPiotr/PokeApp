import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;

  .logotype {
    margin-right: 30px;
    display: flex;
  }

  .header {
    font-size: 16px;
    font-weight: 700;
    color: white;

    @media (min-width: 640px) {
      font-size: 18px;
    }
  }
`;
