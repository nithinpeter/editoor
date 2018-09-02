import { Provider } from 'mobx-react';
import * as React from 'react';

import * as styles from './App.style';
import { EditorGroup } from './EditorGroup';
import { createRootStore } from './RootStore';
import { Sidebar } from './Sidebar';

class App extends React.Component {
  public render() {
    return (
      <Provider {...createRootStore()}>
        <styles.StyledApp>
          <Sidebar />
          <EditorGroup />
        </styles.StyledApp>
      </Provider>
    );
  }
}

export default App;
