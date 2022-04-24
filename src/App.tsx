import React from 'react';
import './App.scss';
import { sidebar } from './Components/Sidebar/sidebar';
let poop = new sidebar({})

function App() {
  return (poop.render());
}

export default App;
