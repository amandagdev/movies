import React, { useEffect } from 'react';
import { Container, Section } from './styles';

import Header from '../../Components/Header';
import CardMovie from '../../Components/Card';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispacth = useDispatch()
  const card = useSelector(state => state.card.movies)


  return (
    <>
      <Header />
      <Section>
        <h1>Popular Movies</h1>
        <Container>
          {/* {data &&
            data.results.map((item) => <CardMovie key={item.id} item={item} />)} */}
        </Container>
      </Section>
    </>
  );
};

export default Home;
