import React from 'react';
import './App.scss';
import TemporaryDrawer from './Components/Sidebar/sidebar'
import NetworkGraph from './Components/NetworkGraph/GraphComponent'

function App() {
  return (
  <>
  <NetworkGraph/>
  <TemporaryDrawer></TemporaryDrawer>
  </>
  );
}

export default App;
