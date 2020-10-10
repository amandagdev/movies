import React, { useEffect, useState } from 'react';
import { Container, Section } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../Components/Header';
import CardMovie from '../../Components/Card';
import { getToMovies } from '../../store/modules/Card/actions';

const Home = () => {
  const dispacth = useDispatch();
  const card = useSelector((state) => state.card.movies.data);
  const [pages, setPages] = useState([1, 2, 3]);

  useEffect(() => {
    function infiniteScroll() {}
    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);

    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  useEffect(() => {
    dispacth(getToMovies(2));
  }, [dispacth]);

  return (
    <>
      <Header />
      <Section>
        <h1>Popular Movies</h1>
        {/* {pages.map((itemPage) => (
          <Container key={itemPage}>
            {card &&
              card.results.map((item) => (
                <CardMovie key={item.id} item={item} page={itemPage} />
              ))}
          </Container>
        ))} */}

        <Container>
          {card &&
            card.results.map((item) => (
              <CardMovie key={item.id} item={item} page="1" />
            ))}
        </Container>

        <Container>
          {card &&
            card.results.map((item) => (
              <CardMovie key={item.id} item={item} page="2" />
            ))}
        </Container>
      </Section>
    </>
  );
};

export default Home;
