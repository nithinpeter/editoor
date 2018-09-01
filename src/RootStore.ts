import { FileTreeModel } from './FileTreeModel';

class RootStore {
  fileTree: FileTreeModel;
  constructor() {
    this.fileTree = new FileTreeModel();
  }
}

export const createRootStore = () => new RootStore();
