import React from 'react';
import TemporaryDrawer from './Components/Sidebar/sidebar'
import NetworkGraph from './Components/NetworkGraph/GraphComponent'

interface Props {

}

class App extends React.Component<Props> {
  render() {
    return (
      <>
      <TemporaryDrawer/>
      <NetworkGraph/>
      </>
    );
  }
}

export default App;
