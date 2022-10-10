const fetchSearchWord = (search) => {};

const initialState = {
  searchWord: '',
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM':
      return {
        searchWord: action.item,
      };
    default:
      return state;
  }
};

export default searchReducer;
