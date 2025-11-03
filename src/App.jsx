import React from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Chatbot from "./components/Chatbot.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Home />
      </main>
      <Chatbot />
    </>
  );
}
