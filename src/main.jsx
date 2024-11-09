// main.jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AppAfterLog from './AppAfterLog'
import './index.css'

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true); 
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
      {isLoggedIn ? <AppAfterLog /> : <App />}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

export default Main;
