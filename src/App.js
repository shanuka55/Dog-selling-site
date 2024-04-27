import './App.css';
import {Route, Routes } from "react-router-dom";
import Home from './routes/Home';

function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/DashBoard" element={<DashBoard />}/> */}
      </Routes>
       
      </>
  );
}

export default App;
