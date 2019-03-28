import axios from 'axios';

const CHANGE_VALUE = 'CHANGE_VALUE';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const ITEMS_LOADING = 'ITEMS_LOADING';
const FETCH_FAILED = 'FETCH_FAILED';

const url = 'https://restcountries.eu/rest/v2/name/';

export const changeFilter = filter => ({
  type: CHANGE_VALUE,
  filter,
});

export const itemsIsLoading = bool => ({
  type: ITEMS_LOADING,
  isLoading: bool,
});

export const itemsFetchResultsSuccess = items => ({
  type: FETCH_SUCCESS,
  payload: items,
});

export const itemsFetchResultsFailed = () => ({
  type: FETCH_FAILED,
});

export const itemsFetchResults = country => (
  (dispatch) => {
    dispatch(itemsIsLoading(true));
    dispatch(changeFilter(country));
    axios.get(`${url}${country}`)
      .then((items) => {
        dispatch(itemsFetchResultsSuccess(items.data));
        dispatch(itemsIsLoading(false));
      })
      .catch(() => dispatch(itemsFetchResultsFailed()));
  }
);