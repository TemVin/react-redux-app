const initialState = {
  filter: '',
  countries: [],
  loading: false,
};

const itemsFetchResults = (state = initialState, action) => {
  const {
    payload,
    filter,
    isLoading,
  } = action;

  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        countries: payload,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        filter,
      };
    case 'ITEMS_LOADING':
      return {
        ...state,
        loading: isLoading,
      };
    case 'FETCH_FAILED':
      return {
        ...state,
        countries: [],
      };

    default:
      return state;
  }
};


export default itemsFetchResults;
