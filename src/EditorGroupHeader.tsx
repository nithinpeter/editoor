import EditorCloseIcon from '@atlaskit/icon/glyph/editor/close';
import { observer } from 'mobx-react';
import * as React from 'react';

import * as styles from './EditorGroupHeader.style';
import { EditorGroupModel } from './EditorGroupModel';
import { getFileIcon } from './utils';

interface EditorHeaderProps {
  editorGroup: EditorGroupModel;
}

const Header: React.SFC<EditorHeaderProps> = props => {
  const openEditors = props.editorGroup!.openEditors;

  return (
    <styles.EditorGroupHeader>
      {openEditors.map(editorObj => {
        const editorKey = editorObj.filePath;

        return (
          <styles.EditorGroupHeaderItem
            key={editorKey}
            onClick={() => props.editorGroup.setActiveEditor(editorKey)}
            isActive={props.editorGroup.activeEditor === editorKey}
          >
            <styles.EditorGroupHeaderItemIcon
              className={getFileIcon(editorObj!.fileName)}
            />
            <span>{editorObj!.filePath}</span>
            <styles.CloseIconWrapper
              onClick={e => {
                props.editorGroup!.closeEditor(editorKey);
                e.stopPropagation();
              }}
            >
              <EditorCloseIcon label={`close ${editorObj!.fileName}`} />
            </styles.CloseIconWrapper>
          </styles.EditorGroupHeaderItem>
        );
      })}
    </styles.EditorGroupHeader>
  );
};

export const EditorGroupHeader = observer(Header);
