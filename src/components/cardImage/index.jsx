import React from 'react';
import { CardImageConteiner } from './styles';

export function CardImage(props) {

  return (
    <CardImageConteiner>
      <img className='imageCard' src={props.image} alt={props.altImage} />
    </CardImageConteiner>
  );
};
