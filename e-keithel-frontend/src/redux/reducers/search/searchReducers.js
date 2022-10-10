const fetchSearchWord = (search) => {};

const initialState = {
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ITEM':
      return {
        searchResults: action.item,
      };
    default:
      return state;
  }
};

export default searchReducer;
