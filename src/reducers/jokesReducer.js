const SET_JOKES = 'SET_JOKES';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FAVORITE_JOKES = 'SET_FAVORITE_JOKES';

const defaultState = {
  items: '',
  id: '',
  isFetching: true,
  favoriteJokes: [],
};

export default function jokesReducer(state = defaultState, action) {
  if (action.type === SET_JOKES) {
    return {
      ...state,
      items: action.payload.value,
      isFetching: false,
      id: action.payload.id,
    };
  } else if (action.type === SET_IS_FETCHING) {
    return {
      ...state,
      isFetching: action.payload,
    };
  } else if (action.type === SET_FAVORITE_JOKES) {
    return {
      ...state,
      favoriteJokes: action.payload.id,
    };
  }
  return state;
}

//Fetching value from API (joke called VALUE in api then why it's not an item but value)

export const setJokes = (jokes) => ({ type: SET_JOKES, payload: jokes });
export const setFetching = (bool) => ({ type: SET_IS_FETCHING, payload: bool });
export const setFavoriteJokes = (id) => ({ type: SET_FAVORITE_JOKES, payload: id });
