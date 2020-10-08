import React from 'react'
import { CardMovie } from './styles'

const Card = ({item}) => {
  return (
    <CardMovie>card: {item.title}</CardMovie>
  )
}

export default Card