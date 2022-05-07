import React from 'react';
import TemporaryDrawer from './Components/Sidebar/sidebar'
import NetworkGraph from './Components/NetworkGraph/GraphComponent'

const App = () => {
  return (
  <>
  <NetworkGraph/>
  <TemporaryDrawer></TemporaryDrawer>
  </>
  );
}

export default App;
