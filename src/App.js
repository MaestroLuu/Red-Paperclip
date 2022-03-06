import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/App.css";
import "./components/Header/Header.css";
import Home from "./components/pages/Home";
import Chat from "./components/pages/Chat";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login/";
import Profile from "./components/pages/Profile/";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/red-paperclip/home" element={<Home />} />
          <Route path="/red-paperclip/chat" element={<Chat />} />
          <Route path="/red-paperclip/contact" element={<Contact />} />
          <Route path="/red-paperclip/login" element={<Login />} />
          <Route path="/red-paperclip/profile" element={<Profile />} />
          <Route path="/red-paperclip/signup" element={<Signup />} />
        </Routes>
      </Router>
      {/* item cards */}
      {/* buttons below cards */}

      {/* chat screen */}
      {/* individual chat screen */}
    </div>
  );
}

export default App;
