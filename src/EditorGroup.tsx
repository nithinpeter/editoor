import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Editor } from './Editor';
import * as styles from './EditorGroup.style';
import { EditorGroupBlank } from './EditorGroupBlank';
import { EditorGroupHeader } from './EditorGroupHeader';
import { EditorGroupModel } from './EditorGroupModel';

export interface EditorGroupProps {
  editorGroup?: EditorGroupModel;
}

@inject(({ editorGroup }) => ({ editorGroup }))
@observer
export class EditorGroup extends React.Component<EditorGroupProps, any> {
  renderBlank() {
    return <EditorGroupBlank />;
  }

  renderEditor = () => {
    const editorGroupMap = this.props.editorGroup!.editorGroup;
    const activeEditor = this.props.editorGroup!.activeEditor;

    if (!activeEditor) {
      return this.renderBlank();
    }

    const editorObj = editorGroupMap.get(activeEditor);
    if (!editorObj) {
      return this.renderBlank();
    }

    return (
      <Editor
        isOpen={editorObj!.isOpen}
        fileName={editorObj!.fileName}
        filePath={editorObj!.filePath}
        sourceCode={editorObj!.sourceCode}
        changedSourceCode={editorObj!.changedSourceCode}
      />
    );
  };

  render() {
    return (
      <styles.StyledEditorGroup>
        <EditorGroupHeader editorGroup={this.props.editorGroup!} />
        {this.renderEditor()}
      </styles.StyledEditorGroup>
    );
  }
}
