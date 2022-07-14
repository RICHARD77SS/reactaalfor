import React from 'react';

import { UserDataSt } from './styles';

interface Props {
  height: string;
  children?: string;
}

export const UserData: React.FC<Props> = ({ height, children }) => {

  return (
    <UserDataSt height={height}>{children}</UserDataSt>
  )
}

