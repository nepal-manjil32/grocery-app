import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppAfterLog from './AppAfterLog';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!isLoggedIn ? <App onLogin={handleLogin} /> : <Navigate to="/after-login/menu" />}
        />
        <Route
          path="/after-login/*"
          element={isLoggedIn ? <AppAfterLog onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
