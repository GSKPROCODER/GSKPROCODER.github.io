import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Events } from './pages/Events';
import { Login } from './pages/Login';
import { Admin } from './pages/Admin';
import { Navbar } from './components/Navbar';
import { AdminRoute } from './components/AdminRoute';

export function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          } 
        />
      </Routes>
    </Router>
  );
}