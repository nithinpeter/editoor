import { Provider } from 'mobx-react';
import * as React from 'react';

import { createRootStore } from './RootStore';
import { Sidebar } from './Sidebar';

class App extends React.Component {
  public render() {
    return (
      <Provider {...createRootStore()}>
        <div className="App">
          <Sidebar />
        </div>
      </Provider>
    );
  }
}

export default App;
