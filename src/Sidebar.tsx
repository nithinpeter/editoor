import * as React from 'react';

import { FileTree } from './FileTree';
import { OpenEditors } from './OpenEditors';
import * as styles from './Sidebar.style';

export class Sidebar extends React.Component<{}, {}> {
  render() {
    return (
      <styles.SidebarWrapper>
        <styles.SidebarTitle>Explorer</styles.SidebarTitle>
        <OpenEditors />
        <FileTree />
      </styles.SidebarWrapper>
    );
  }
}
