import React from 'react';

import { FoldersStyle } from './styles';
import Folder from '../folder';

const Folders: React.FC = () => {
  return (
    <FoldersStyle>
      <Folder />
    </FoldersStyle>
  );
};

export default Folders;