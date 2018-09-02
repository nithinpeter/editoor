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
