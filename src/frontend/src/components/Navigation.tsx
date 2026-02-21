import { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light navbar-dhaba fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-dhaba-primary" style={{ fontSize: '1.5rem', fontFamily: 'Merriweather, serif' }}>
          🍛 URBAN RASOI DHABA
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link fw-semibold ${isActive('/') ? 'text-dhaba-primary' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link fw-semibold ${isActive('/about') ? 'text-dhaba-primary' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/menu" 
                className={`nav-link fw-semibold ${isActive('/menu') ? 'text-dhaba-primary' : ''}`}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/category" 
                className={`nav-link fw-semibold ${isActive('/category') ? 'text-dhaba-primary' : ''}`}
              >
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/contact" 
                className={`nav-link fw-semibold ${isActive('/contact') ? 'text-dhaba-primary' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
