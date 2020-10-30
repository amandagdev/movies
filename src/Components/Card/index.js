import React, { useEffect } from 'react';
import { CardMovie, Title } from './styles';
import { getToMovies } from '../../store/modules/Card/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <CardMovie>
      <Link to={`details/${item.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
          alt=""
        />
      </Link>
      <Title>
        <h3>{item.title}</h3>
        <div>{item.vote_average}</div>
      </Title>
    </CardMovie>
  );
};

export default Card;
