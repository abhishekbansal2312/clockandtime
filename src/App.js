import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Clock from "./pages/Clock";
import Timer from "./pages/Timer";
import StopWatch from "./pages/StopWatch";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
