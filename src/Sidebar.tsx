import * as React from 'react';

import { FileTree } from './FileTree';

export class Sidebar extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <FileTree />
      </div>
    );
  }
}
