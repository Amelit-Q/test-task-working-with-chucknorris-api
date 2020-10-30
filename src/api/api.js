import axios from 'axios';
import { setFavoriteJokes, setJokes } from '../reducers/jokesReducer';

const instance = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

export const fetchRandomJoke = () => async (dispatch) => {
  const response = await instance.get('/random');
  dispatch(setJokes(response.data));
};

export const getFavoriteJoke = (id) => async (dispatch) => {
  const response = await instance.get(`/${id}`);
  dispatch(setFavoriteJokes(response.data));
};
