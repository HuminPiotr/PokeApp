export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};

export const addItem = (name, ability = undefined, gender = undefined) => {
  return {
    type: 'ADD_ITEM',
    payload: {
      name: name,
      ability: ability,
      gender: gender,
    },
  };
};
