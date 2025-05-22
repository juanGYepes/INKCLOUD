import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PublicHome from './frontend/pages/PublicHome';
import Dashboard from './admin/pages/Dashboard';
import Login from './frontend/pages/Login';
import { useState } from 'react';

function App() {
  let [isAuthenticated, setIsAuthenticated]= useState(true);
  let handleLogin = () => {
    setIsAuthenticated(true);//Token de autorizacion
  }
  return (
    <Router>
      <Routes>
        <Route path="/PublicHome" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <PublicHome />} />
        <Route path="/Login" element={ isAuthenticated ? <Navigate to="/Dashboard"/> : <Login />} />
        <Route path="/Dashboard" element={ isAuthenticated ? <Dashboard /> : <Navigate to="/Login"/>} />
        <Route path="*" element={<PublicHome />} />
      </Routes>
    </Router>
  );
}

export default App;
