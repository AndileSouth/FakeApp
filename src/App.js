import './App.css';
import { Routes, Route } from "react-router-dom";
import HOME from './components/Home';
import NAVBAR from './components/Navbar';
import SIDEBAR from './components/SideBar';

function App() {
  return (
    <div className="App">
      <NAVBAR/>
      <div className="lg-screen row">
        <SIDEBAR/>
      <Routes>
          <Route exact path="/" element={<HOME/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
