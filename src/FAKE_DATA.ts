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
