import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Form from './pages/pages/Form'
import Swipe from './pages/pages/Swipe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/swipe" element={<Swipe />} />
      </Routes>
    </div>
  );
}

export default App;
