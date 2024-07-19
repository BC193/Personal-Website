import logo from './logo.svg';
import './App.css';
import ScrollableSection from './ScrollableSection';
import InformationBox from './InformationBox';

function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <InformationBox></InformationBox>
        <ScrollableSection></ScrollableSection>
      </div>
    </div>
  );
}

export default App;
