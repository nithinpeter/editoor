// tslint:disable
export const fakeFiles = [
  {
    name: 'src',
    type: 'directory',
    contents: [
      {
        name: 'app',
        type: 'directory',
        contents: [
          {
            name: 'main.js',
            type: 'file',
          },
          {
            name: 'dir.js',
            type: 'file',
          },
          {
            name: 'faar.js',
            type: 'file',
          },
        ],
      },
    ],
  },
  {
    name: 'tests',
    type: 'directory',
    contents: [
      {
        name: 'test1',
        type: 'directory',
        contents: [
          {
            name: 'app.test.js',
            type: 'file',
          },
          {
            name: 'kopp.test.js',
            type: 'file',
          },
        ],
      },
    ],
  },
];

export const getFakeFileData = () => {
  const files = [
    `import { flow, observable } from 'mobx';

    export type Editor = {
      fileName: string;
      fullPath: string;
      sourceCode: string;
      updatedSourceCode: string;
    };

    export class EditorGroupModel {
      @observable
      editors: Editor[];

      fetchFiles = flow(function*(this: FileTreeModel) {
        this.contents = yield fakeFiles;
      });
    }
    `,
    `import { FileTreeModel } from './FileTreeModel';

    class RootStore {
    fileTree: FileTreeModel;
    constructor() {
        this.fileTree = new FileTreeModel();
    }
    }

    export const createRootStore = () => new RootStore();
    `,
    `HTML5 finally provides a standard way to interact with local files, via the File API specification. As example of its capabilities, the File API could be used to create a thumbnail preview of images as they're being sent to the server, or allow an app to save a file reference while the user is offline. Additionally, you could use client-side logic to verify an upload's mimetype matches its file extension or restrict the size of an upload.

    The spec provides several interfaces for accessing files from a 'local' filesystem:

    File - an individual file; provides readonly information such as name, file size, mimetype, and a reference to the file handle.
    FileList - an array-like sequence of File objects. (Think <input type="file" multiple> or dragging a directory of files from the desktop).
    Blob - Allows for slicing a file into byte ranges.
    When used in conjunction with the above data structures, the FileReader interface can be used to asynchronously read a file through familiar JavaScript event handling. Thus, it is possible to monitor the progress of a read, catch errors, and determine when a load is complete. In many ways the APIs resemble XMLHttpRequest's event model.`,
    `
    export const EditorGroupHeader: React.SFC<EditorHeaderProps> = props => {
      const editorGroupMap = props.editorGroup!.editorGroup;
      const editors: any[] = [];

      editorGroupMap.forEach((editor, editorKey) => {
        const editorObj = editorGroupMap.get(editorKey);
        editors.push(
          <div
            key={editorKey}
            onClick={() => props.editorGroup.setActiveEditor(editorKey)}
          >
            {editorObj!.filePath}
          </div>
        );
      });

      return <div>{editors}</div>;
    };
    `,
    `
    {
      "compilerOptions": {
        "baseUrl": ".",
        "outDir": "build/dist",
        "module": "esnext",
        "target": "es5",
        "lib": ["es6", "dom"],
        "sourceMap": true,
        "allowJs": true,
        "jsx": "react",
        "moduleResolution": "node",
        "rootDir": "src",
        "forceConsistentCasingInFileNames": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "suppressImplicitAnyIndexErrors": true,
        "noUnusedLocals": true,
        "experimentalDecorators": true
      },
      "exclude": [
        "node_modules",
        "build",
        "scripts",
        "acceptance-tests",
        "webpack",
        "jest",
        "src/setupTests.ts"
      ]
    }
    `,
    `
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
`,
    `
import * as React from 'react';
const MonacoEditor = require('react-monaco-editor').default;

export interface EditorProps {
  fileName: string;
  filePath: string;
  sourceCode: string;
  changedSourceCode: string;
  isOpen: boolean;
}

export class Editor extends React.Component<EditorProps, any> {
  handleChange = () => {
    // do nothin
  };

  render() {
    console.log(MonacoEditor);
    return (
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        value={this.props.sourceCode}
        onChange={this.handleChange}
      />
    );
  }
}
`,
    `
body {
  margin: 0;
  padding: 0;
}
`,
    `body {
  margin: 0;
  padding: 0;
}
`,
    `body {
  margin: 0;
  padding: 0;
}
`,
  ];

  const randomIndex = Math.floor(Math.random() * 10);
  return files[randomIndex];
};
