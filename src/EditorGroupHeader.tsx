import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import * as React from 'react';

import * as styles from './EditorGroupHeader.style';
import { EditorGroupModel } from './EditorGroupModel';
import { getFileIcon } from './utils';

interface EditorHeaderProps {
  editorGroup: EditorGroupModel;
}

export const EditorGroupHeader: React.SFC<EditorHeaderProps> = props => {
  const editorGroupMap = props.editorGroup!.editorGroup;
  const editors: any[] = [];

  editorGroupMap.forEach((editor, editorKey) => {
    const editorObj = editorGroupMap.get(editorKey);
    editors.push(
      <styles.EditorGroupHeaderItem
        key={editorKey}
        onClick={() => props.editorGroup.setActiveEditor(editorKey)}
        isActive={props.editorGroup.activeEditor === editorKey}
      >
        <styles.EditorGroupHeaderItemIcon
          className={getFileIcon(editorObj!.fileName)}
        />
        <span>{editorObj!.filePath}</span>
        <styles.CloseIconWrapper onClick={() => props.editorGroup!.closeEditor(editorKey)}>
          <EditorCloseIcon label={`close ${editorObj!.fileName}`} />
        </styles.CloseIconWrapper>
      </styles.EditorGroupHeaderItem>
    );
  });

  return <styles.EditorGroupHeader>{editors}</styles.EditorGroupHeader>;
};
