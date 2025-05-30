import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicHome from './frontend/pages/PublicHome';
import Dashboard from './admin/pages/Dashboard';
import Login from './frontend/pages/Login';
import Register from './frontend/pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PublicHome" element={<PublicHome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<PublicHome />} />
      </Routes>
    </Router>
  );
}

export default App;

