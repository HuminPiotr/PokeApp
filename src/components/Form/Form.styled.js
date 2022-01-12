import styled from 'styled-components';

export const Form = styled.form`
  color: white;

  .statement {
    color: #ffd232;
    margin: 0;
  }
`;

export const InputText = styled.input`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  background-color: white;
  padding: 10px;
  line-height: 18px;
  border: none;

  ::placeholder {
    color: var(--gray);
  }
`;

export const Select = styled.select`
  position: relative;
  width: 100%;
  margin-bottom: 8px;
  background-color: white;
  padding: 8px 10px;
  line-height: 18px;
  border: none;

  option {
    color: black;
  }

  :invalid {
    color: var(--gray);
  }

  option[value=''][disabled] {
    display: none;
  }
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;
`;

export const InputRadio = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  padding: 0 28px;
  line-height: 19px;
  text-transform: capitalize;

  input {
    position: absolute;
    opacity: 0;
  }
  :nth-child(2) {
    order: -1;
  }

  input:checked ~ .checkmark {
    background-color: white;
  }

  .checkmark {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 19px;
    height: 19px;
    border: 3px solid white;
    border-radius: 50%;
    transition: 0.2s;
  }
`;

export const Spinner = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 2px solid white;
  border-radius: 50%;
`;

export const InputTitle = styled.p`
  line-height: 18px;
  margin: 0;
  margin-top: 8px;
  transform: translateX(-3px);
`;

export const Submit = styled.input`
  color: var(--darkRed);
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background-color: white;
  border: none;
  padding: 8px 94px;
  margin: 39px 0;
  cursor: pointer;
`;
