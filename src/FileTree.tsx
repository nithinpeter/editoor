import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Content, FileTreeModel } from './FileTreeModel';

export interface FileTreeProps {
  fileTree?: FileTreeModel;
}

@inject(({ fileTree }) => ({ fileTree }))
@observer
export class FileTree extends React.Component<FileTreeProps, any> {
  componentDidMount() {
    this.props.fileTree!.fetchFiles();
  }

  renderFileName = (fileName: string) => fileName;

  renderSubTree = (contents: Content[] = []): any => {
    return contents.map(content => {
      if (content.type === 'directory') {
        return this.renderSubTree(content.contents);
      } else {
        return this.renderFileName(content.name);
      }
    });
  };

  render() {
    return <div>{this.renderSubTree(this.props.fileTree!.contents)}</div>;
  }
}
