import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppAfterLog from './AppAfterLog';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ShopContextProvider from './context/Shopcontext';

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
    <ShopContextProvider>
      <Routes>
        <Route
          path="/"
          element={!isLoggedIn ? <App onLogin={handleLogin} /> : <Navigate to="/AppAfterLog" />}
        />
        <Route
          path="/AppAfterLog/*"
          element={isLoggedIn ? <AppAfterLog onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </ShopContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
