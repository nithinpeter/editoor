import { action, flow, observable, ObservableMap } from 'mobx';

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

  fetchSourceCode = flow(function*(this: EditorGroupModel, filePath: string) {
    const source = yield getFakeFileData();

    this.editorGroup.set(filePath, {
      changedSourceCode: '',
      fileName: filePath,
      filePath,
      isOpen: true,
      sourceCode: source,
    });
    console.log(this.editorGroup);
  });

  @action
  setActiveEditor = (activeEditor: string) => {
    this.activeEditor = activeEditor;
  };
}
