import React from 'react';
import { PortFolderStyle } from './styles';
import Folders from '../folders';
import { Ports } from '../ports';

const PortFolder: React.FC = () => { 
  return (
    <PortFolderStyle>
      <Folders />
      <Ports />
    </PortFolderStyle>
  );
}

export default PortFolder;