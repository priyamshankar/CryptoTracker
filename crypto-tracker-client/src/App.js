import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={"hello world"}/>
      <Route path="/login" element={<Signup/>}/>
      <Route path="/signup" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;