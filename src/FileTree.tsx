import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import ChevronRightIcon from '@atlaskit/icon/glyph/chevron-right';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

const FileIcons = require('file-icons-js');

import { EditorGroupModel } from './EditorGroupModel';
import { Content, FileTreeModel } from './FileTreeModel';

export interface FileTreeProps {
  fileTree?: FileTreeModel;
  editorGroup?: EditorGroupModel;
}

@inject(({ fileTree, editorGroup }) => ({ fileTree, editorGroup }))
@observer
export class FileTree extends React.Component<FileTreeProps, any> {
  componentDidMount() {
    this.props.fileTree!.fetchFiles();
  }

  hanldeFileNameClick = (filePath: string) => {
    this.props.editorGroup!.setActiveEditor(filePath);
    this.props.editorGroup!.fetchSourceCode(filePath);
  };

  getFileIcon = (fileName: string) => {
    return FileIcons.getClassWithColor(fileName);
  };

  renderFileName = (fileName: string) => (
    <span onClick={() => this.hanldeFileNameClick(fileName)}>
      <span className={this.getFileIcon(fileName)} />
      {fileName}
    </span>
  );

  renderSubTree = (contents: Content[] = []): any => {
    return (
      <ul>
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
      </ul>
    );
  };

  render() {
    return <div>{this.renderSubTree(this.props.fileTree!.contents)}</div>;
  }
}

/* Subrtree */

const iconMap = {
  treeClosed: <ChevronRightIcon label="close" />,
  treeOpen: <ChevronDownIcon label="open" />,
};

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
    <span onClick={this.handleDirNameClick}>
      {this.state.expanded ? iconMap.treeOpen : iconMap.treeClosed}
      {dirName}
    </span>
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
