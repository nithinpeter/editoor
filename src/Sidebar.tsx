import * as React from 'react';

import { FileTree } from './FileTree';
import * as styles from './Sidebar.style';

export class Sidebar extends React.Component<any, any> {
  public render() {
    return (
      <styles.SidebarWrapper>
        <FileTree />
      </styles.SidebarWrapper>
    );
  }
}
