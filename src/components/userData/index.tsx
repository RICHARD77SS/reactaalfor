import React from 'react';

import { UserDataSt } from './styles';

interface Props {
  height: string;
  color?: string;
  children?: string;
}

export const UserData: React.FC<Props> = ({
  height,
  children,
  color = '#000'
}) => {

  return (
    <UserDataSt height={height} color={color}>{children}</UserDataSt>
  )
}

