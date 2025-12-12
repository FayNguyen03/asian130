import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './css/NavigationBar.css';

const NavigationBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Introduction' },
    { path: '/examples', label: 'Notable Series' },
    { path: '/east-vs-west', label: 'East vs West' },
    { path: '/conclusion', label: 'Conclusion' },
    { path: '/bibliography', label: 'Bibliography' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-title">
          <Link to="/" className="nav-logo">
            Collective Warriors From The East
          </Link>
        </div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-tabs ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} onClick={() => setOpen(false)}>
                <Link
                  to={item.path}
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;