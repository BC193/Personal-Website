import React from 'react';
import './App.css';
import InformationBox from './InformationBox';
import ScrollableSection from './ScrollableSection';

function App() {
  return (
    <div className="App">
      <div className="Homepage">
      <div className="LeftSide">
          <InformationBox />
        </div>
        <div className="RightSide">
          <ScrollableSection />
        </div>
      </div>
    </div>
  );
}

export default App;
