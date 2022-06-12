import React from 'react';

import { InputStyle } from './styles';

export const InputList = ({
  placeholder,
  list
}) => {

  return (
    <InputStyle placeholder={placeholder} list={list}/>
  );
};
