
import React from "react";
import Home from "./pages/Home.jsx";
import Chatbot from "./components/Chatbot.jsx";

export default function App() {
  return (
    <>
       
      <main className="w-full min-h-screen">
        <Home />
      </main>
      <Chatbot />
    </>
  );
}
/*

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <main className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Chatbot />
    </Router>
  );
}

export default App;
*/