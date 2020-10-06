import React, { useEffect } from 'react';
import { Container, Section } from './styles';
import useRequest from '../../hooks/useRequest';

import Header from '../../Components/Header';
import CardMovie from '../../Components/Card';

const Home = () => {
  const { data, request } = useRequest();

  useEffect(() => {
    request('popular');
  }, []);

  return (
    <>
      <Header />
      <Section>
        <h1>Popular Movies</h1>
        <Container>
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </Container>
      </Section>
    </>
  );
};

export default Home;
