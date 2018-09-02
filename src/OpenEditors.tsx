import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { EditorGroupModel } from './EditorGroupModel';
import * as sidebarStyles from './Sidebar.style';
import { SidebarSectionTitle } from './SidebarSectionTitle';
import { getFileIcon } from './utils';

export interface OpenEditorsProps {
  editorGroup?: EditorGroupModel;
}

export interface OpenEditorsState {
  expanded: boolean;
}

@inject(({ editorGroup }) => ({ editorGroup }))
@observer
export class OpenEditors extends React.Component<
  OpenEditorsProps,
  OpenEditorsState
> {
  constructor(props: OpenEditorsProps) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleCloseEditor = (e: any, filePath: string) => {
    e.stopPropagation();
    this.props.editorGroup!.closeEditor(filePath);
  };

  handleTitleClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  handeSetActiveEditor = (filePath: string) => {
    this.props.editorGroup!.setActiveEditor(filePath);
  };

  renderFileName = (fileName: string, filePath: string) => (
    <sidebarStyles.SidebarItemWrapper
      onClick={() => this.handeSetActiveEditor(filePath)}
    >
      <EditorCloseIcon
        label={`close ${fileName}`}
        onClick={e => this.handleCloseEditor(e, fileName)}
      />
      <sidebarStyles.SidebarIconWrapper className={getFileIcon(fileName)} />
      <span>{fileName}</span>
    </sidebarStyles.SidebarItemWrapper>
  );

  renderOpenEditorList = () => {
    return this.props.editorGroup!.openEditors.map(editor =>
      this.renderFileName(editor.fileName, editor.fileName)
    );
  };

  renderTitle = () => (
    <SidebarSectionTitle
      expanded={this.state.expanded}
      label="Open tabs"
      onClick={this.handleTitleClick}
    />
  );

  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.state.expanded && this.renderOpenEditorList()}
      </div>
    );
  }
}
