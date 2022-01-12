import uniqid from 'uniqid';

const initialState = {
  pokemonList: [],
};

const rootReducer = (state = initialState, action) => {
  const { pokemonList } = state;
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        pokemonList: pokemonList.filter((item) => item.id !== action.payload.id),
      };

    case 'ADD_ITEM':
      return {
        pokemonList: [
          ...pokemonList,
          {
            id: uniqid(),
            name: action.payload.name,
            ability: action.payload.ability,
            gender: action.payload.gender,
          },
        ],
      };
  }
  return state;
};

export default rootReducer;
