import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Editor } from './Editor';
import * as styles from './EditorGroup.style';
import { EditorGroupModel } from './EditorGroupModel';
import { EditorHeader } from './EditorHeader';

export interface EditorGroupProps {
  editorGroup?: EditorGroupModel;
}

@inject(({ editorGroup }) => ({ editorGroup }))
@observer
export class EditorGroup extends React.Component<EditorGroupProps, any> {
  renderEditorGroupHeader = () => {
    const editorGroupMap = this.props.editorGroup!.editorGroup;
    const editors: any[] = [];

    editorGroupMap.forEach((editor, editorKey) => {
      const editorObj = editorGroupMap.get(editorKey);

      editors.push(
        <EditorHeader
          key={editorKey}
          isOpen={editorObj!.isOpen}
          fileName={editorObj!.fileName}
          filePath={editorObj!.filePath}
        />
      );
    });

    return editors;
  };

  renderEditor = () => {
    const editorGroupMap = this.props.editorGroup!.editorGroup;
    const activeEditor = this.props.editorGroup!.activeEditor;

    if (!activeEditor) {
      return;
    }

    const editorObj = editorGroupMap.get(activeEditor);
    if (!editorObj) {
      return;
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
        {this.renderEditorGroupHeader()}
        {this.renderEditor()}
      </styles.StyledEditorGroup>
    );
  }
}
