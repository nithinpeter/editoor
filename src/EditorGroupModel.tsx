import { action, computed, flow, observable, ObservableMap } from 'mobx';

import { getFakeFileData } from './FAKE_DATA';

export type EditorModel = {
  fileName: string;
  filePath: string;
  sourceCode: string;
  changedSourceCode: string;
  isOpen: boolean;
};

export class EditorGroupModel {
  @observable
  editorGroup: ObservableMap<string, EditorModel> = new ObservableMap();

  @observable
  activeEditor: string;

  @computed
  get openEditors() {
    const openEditors = [];
    for (const editor of this.editorGroup) {
      if (editor[1].isOpen) {
        openEditors.push(editor[1]);
      }
    }
    return openEditors;
  }

  fetchSourceCode = flow(function*(this: EditorGroupModel, filePath: string) {
    const source = yield getFakeFileData();

    this.editorGroup.set(filePath, {
      changedSourceCode: '',
      fileName: filePath,
      filePath,
      isOpen: true,
      sourceCode: source,
    });
  });

  @action
  setActiveEditor = (activeEditor: string) => {
    this.activeEditor = activeEditor;
  };

  @action
  closeEditor = (editorKey: string) => {
    const editor = this.editorGroup.get(editorKey);
    this.editorGroup.set(editorKey, {
      ...editor,
      isOpen: false,
    } as EditorModel);

    // If the closed editor is the active one,
    // set activeEditor to the first one in the editorGroup.
    // Not the best solution, should revisit!
    if (editorKey === this.activeEditor) {
      for (const [key] of this.editorGroup) {
        this.setActiveEditor(key);
        break;
      }
    }
  };
}
