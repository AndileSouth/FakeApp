import './App.css';
import { Routes, Route } from "react-router-dom";
import HOME from './components/Home';
import NAVBAR from './components/Navbar';
import SETTINGS from './components/Settings';

function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
          <Route path="/Settings" element={<SETTINGS/>}/>
        </Routes>
    </div>
  );
}

export default App;
