import React, { useState } from 'react';
import { Movie } from '../../../types';
import style from "../Content.module.scss";
import { StyleButton } from './MovieButton.style';

type Props = {
  movie: Movie;
};

const MovieItem: React.FC<Props> = ({ movie }) => {
  const [state, setState] = useState({
    loading: false,
    addedToWatchLater: false,
  });

  const watchLaterClick = () => {
    setState((newState) => ({
      ...newState,
      addedToWatchLater: true,
    }));
  };

  return (
    <div className={style.item} >
      <img src={movie.image} alt={movie.title} />
      <span>{movie.title}</span>
      <span>{movie.description}</span>
      <span>{movie.duration / 60} hours</span>
    

      <StyleButton  selected={state.addedToWatchLater ? true : false} background='#C9A66B' border='#AF4425'  onClick={watchLaterClick}>
        {state.addedToWatchLater ? 'Added to list' : 'Watch later'}
      </StyleButton>
    </div>
  );
};

export default MovieItem;
