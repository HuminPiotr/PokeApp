import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .backLink {
    color: white;
    margin: 10px 0;
    line-height: 18px;
    font-weight: 500;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      transform: translateX(-3px);
    }
  }
  .backLink::first-letter {
    font-size: 9px;

    @media (min-width: 640px) {
      font-size: 11px;
    }
  }
`;

export const Header = styled.h2`
  color: white;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
