import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomJoke } from '../api/api';

export const Main = () => {
  const dispatch = useDispatch();
  const jokes = useSelector((state) => state.jokes.items);
  const id = useSelector((state) => state.jokes.id);
  const favoriteJokes = useSelector((state) => state.jokes.favoriteJokes);

  React.useEffect(() => {
    dispatch(fetchRandomJoke());
  }, []);

  const handleButtonClick = (e) => {
    dispatch(fetchRandomJoke());
  };

  const handleStandUpButton = (e) => {
    const interval = setInterval(() => dispatch(fetchRandomJoke()), 30000);
    return () => {
      clearInterval(interval);
    };
  };

  //onClick button - происходит запрос на сервер

  return (
    <div className="main">
      <button onClick={handleButtonClick}>Get a Joke</button>
      <p>{jokes}</p>
      <p>{id}</p>
      <button onClick={handleStandUpButton}>Stand-up</button>
    </div>
  );
};
