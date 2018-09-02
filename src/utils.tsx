import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';
import * as React from 'react';

const FileIcons = require('file-icons-js');

export const getFileIcon = (fileName: string) => {
  return FileIcons.getClassWithColor(fileName);
};

export const iconMap = {
  treeClosed: <ChevronRightIcon label="close" />,
  treeOpen: <ChevronDownIcon label="open" />,
};
