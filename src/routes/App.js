import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../containers/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
