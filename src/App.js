import React from 'react';
import './Reset.css';
import './App.css';

import NavBar from './Components/NavBar/NavBar'
import Gallery from './Components/Gallery/Gallery'
import MobileDrawer from './Components/MobileDrawer/MobileDrawer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Gallery/>
      {/* <MobileDrawer/> */}
    </div>
  );
}

export default App;
