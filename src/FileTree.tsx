import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { EditorGroupModel } from './EditorGroupModel';
import * as styles from './FileTree.style';
import { Content, FileTreeModel } from './FileTreeModel';
import * as sidebarStyles from './Sidebar.style';
import { SidebarSectionTitle } from './SidebarSectionTitle';
import { getFileIcon, iconMap } from './utils';

export interface FileTreeProps {
  fileTree?: FileTreeModel;
  editorGroup?: EditorGroupModel;
}

export interface FileTreeState {
  expanded: boolean;
}

@inject(({ fileTree, editorGroup }) => ({ fileTree, editorGroup }))
@observer
export class FileTree extends React.Component<FileTreeProps, FileTreeState> {
  constructor(props: FileTreeProps) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  componentDidMount() {
    this.props.fileTree!.fetchFiles();
  }

  hanldeFileNameClick = (filePath: string) => {
    this.props.editorGroup!.setActiveEditor(filePath);
    this.props.editorGroup!.fetchSourceCode(filePath);
  };

  handleTitleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  renderTitle = () => (
    <SidebarSectionTitle
      expanded={this.state.expanded}
      label="Files"
      onClick={this.handleTitleClick}
    />
  );

  renderFileName = (fileName: string) => (
    <sidebarStyles.SidebarItemWrapper
      onClick={() => this.hanldeFileNameClick(fileName)}
    >
      <sidebarStyles.SidebarIconWrapper className={getFileIcon(fileName)} />
      <span>{fileName}</span>
    </sidebarStyles.SidebarItemWrapper>
  );

  renderSubTree = (contents: Content[] = []): any => {
    return (
      <styles.SubFileTreeWrapper>
        {contents.map(content => {
          if (content.type === 'directory') {
            return (
              <li key={content.name}>
                <SubTree
                  dirName={content.name}
                  contents={content.contents}
                  renderSubtree={this.renderSubTree}
                />
              </li>
            );
          } else {
            return (
              <li key={content.name}>{this.renderFileName(content.name)}</li>
            );
          }
        })}
      </styles.SubFileTreeWrapper>
    );
  };

  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.state.expanded &&
          this.renderSubTree(this.props.fileTree!.contents)}
      </div>
    );
  }
}

/* Subrtree */

type SubTreeState = {
  expanded: boolean;
};

type SubTreeProps = {
  dirName: string;
  contents: Content[];
  renderSubtree: (contents: Content[]) => React.ReactChildren;
};

class SubTree extends React.Component<SubTreeProps, SubTreeState> {
  constructor(props: SubTreeProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleDirNameClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  renderDirName = (dirName: string) => (
    <sidebarStyles.SidebarItemWrapper onClick={this.handleDirNameClick}>
      {this.state.expanded ? iconMap.treeOpen : iconMap.treeClosed}
      {dirName}
    </sidebarStyles.SidebarItemWrapper>
  );

  render() {
    return (
      <React.Fragment>
        {this.renderDirName(this.props.dirName)}
        {this.state.expanded && this.props.renderSubtree(this.props.contents)}
      </React.Fragment>
    );
  }
}
