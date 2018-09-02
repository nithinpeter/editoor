import * as React from 'react';

interface EditorHeaderProps {
  isOpen: boolean;
  fileName: string;
  filePath: string;
}

export const EditorHeader: React.SFC<EditorHeaderProps> = props => {
  return <div>{props.fileName}</div>;
};
