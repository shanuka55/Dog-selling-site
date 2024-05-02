import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Find from './component/Find';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
       
      </>
  );
}

export default App;
