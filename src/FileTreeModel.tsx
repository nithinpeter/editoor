import { flow, observable } from 'mobx';

import { fakeFiles } from './FAKE_DATA';

export type Content = {
  name: string;
  type: 'directory' | 'file';
  contents: Content[];
};

export class FileTreeModel {
  @observable
  contents: Content[];

  fetchFiles = flow(function*(this: FileTreeModel) {
    this.contents = yield fakeFiles;
  });
}
