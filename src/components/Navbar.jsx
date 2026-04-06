import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userName, onLogout }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* 🌟 1. 將漢堡按鈕移到最前面 (這樣它就會在左邊) */}
      <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 🌟 2. 網站 Logo 放在漢堡選單後面 (手機版會被推到畫面右邊) */}
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu} style={{ color: 'inherit', textDecoration: 'none' }}>JS 探索</Link>
      </div>

      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/features" onClick={closeMenu}>特性</Link></li>
          <li><Link to="/evolution" onClick={closeMenu}>演進史</Link></li>
          <li><Link to="/architecture" onClick={closeMenu}>框架</Link></li>
          <li><Link to="/terminal" onClick={closeMenu}>指令</Link></li>
          <li><Link to="/learning" onClick={closeMenu}>學習</Link></li>
          {isLoggedIn && (
            <li><Link to="/notebook" onClick={closeMenu}>筆記本</Link></li>
          )}
          <li><Link to="/references" onClick={closeMenu}>資源</Link></li>
        </ul>
        
        <div className="auth-section">
          {isLoggedIn ? (
            <>
              <span className="user-greeting">哈囉, <span>{userName}</span></span>
              <button className="logout-btn" onClick={handleLogoutClick}>登出</button>
            </>
          ) : (
            <Link to="/login" className="login-btn" onClick={closeMenu}>登入</Link>
          )}
        </div>
      </div>

      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;