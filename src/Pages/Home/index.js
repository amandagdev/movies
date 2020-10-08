import React, { useEffect } from 'react';
import { Container, Section } from './styles';

import Header from '../../Components/Header';
import CardMovie from '../../Components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getToMovies } from '../../store/modules/Card/actions';

const Home = () => {
  const dispacth = useDispatch();
  const card = useSelector((state) => state.card.movies.data);

  useEffect(() => {
    dispacth(getToMovies());
  }, [dispacth]);

  return (
    <>
      <Header />
      <Section>
        <h1>Popular Movies</h1>
        <Container>
          {card &&
            card.results.map((item) => <CardMovie key={item.id} item={item} />)}
        </Container>
      </Section>
    </>
  );
};

export default Home;
