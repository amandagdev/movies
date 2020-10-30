import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Details = () =>  {

const { id } = useParams();

  return <div>
      ola details {id}
  </div>
}

export default Details;