import React from 'react';
import { CardMovie, Title } from './styles';

const Card = ({ item }) => {
  console.log(item);
  return (
    <CardMovie>
      <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
      <Title>
        <h3>{item.title}</h3>
        <div>{item.vote_average}</div>
      </Title>
    </CardMovie>
  );
};

export default Card;
