import { EditorGroupModel } from './EditorGroupModel';
import { FileTreeModel } from './FileTreeModel';

class RootStore {
  fileTree: FileTreeModel;
  editorGroup: EditorGroupModel;

  constructor() {
    this.editorGroup = new EditorGroupModel();
    this.fileTree = new FileTreeModel();
  }
}

export const createRootStore = () => new RootStore();
