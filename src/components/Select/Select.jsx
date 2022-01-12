import React from 'react';
import * as Styled from './Select.styled'

const Select = ({ options }) => {
  const optionList = options.map((option, index) => (
    <option value={ option } key={ index }> {option} </option>)
  ) 
  return (
    <Styled.Select name="ability" id="ability" required>
    <option value="" className="placeholder" disabled selected >Ability</option>
      {optionList}
    </Styled.Select>
  );
};

export default Select;
