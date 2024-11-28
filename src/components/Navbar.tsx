import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            GDG Gulzar
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/events" className="text-gray-700 hover:text-blue-600">
              Events
            </Link>
            <Link to="/leaderboard" className="text-gray-700 hover:text-blue-600">
              Leaderboard
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>

          <div>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">{user?.name}</span>
                {user?.role === 'admin' && (
                  <Link to="/admin">
                    <Button variant="secondary">Admin Panel</Button>
                  </Link>
                )}
                <Button onClick={logout} variant="secondary">
                  Logout
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}