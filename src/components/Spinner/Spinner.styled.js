import styled from 'styled-components';

export const Spinner = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 10px;
  right: 10px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-top-color: var(--gray);
    border-radius: 50%;
    animation: spinner 1.2s linear infinite;
  }
  div:nth-child(2) {
    border: 10px solid transparent;
    border-bottom-color: var(--gray);
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
      border-width: 10px;
    }
    50% {
      transform: rotate(180deg);
      border-width: 1px;
    }
    100% {
      transform: rotate(360deg);
      border-width: 10px;
    }
  }
`;
