import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Find from './component/Find';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Find" element={<Find />}/>
      </Routes>
       
      </>
  );
}

export default App;
