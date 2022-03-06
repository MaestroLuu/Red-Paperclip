import React, { useState } from 'react';
import Header from './components/Header/Header';
import { Route, Router } from 'react-router-dom';
import Chat from './components/pages/Chat';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import './styles/App.css';
import "./components/Header/Header.css"

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    switch (currentPage) {
      case "Chat":
        return <Chat />;
      case "Profile":
        return <Profile />;
      case "Login":
        return <Login />;
      case "Signup":
        return <Signup />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Router>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}


          <Route path="/">
            <h1>Test HomePage</h1>
          </Route>

          <Route path="/chat">
            <h1>Test Chat Page</h1>
          </Route>

      </Router>
      {/* item cards */}
      {/* buttons below cards */}

      {/* chat screen */}
      {/* individual chat screen */}


    </div>
  );
}

export default App;
