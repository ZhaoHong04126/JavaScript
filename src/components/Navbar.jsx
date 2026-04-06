import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// 接收由 App.jsx 傳遞進來的 props
const Navbar = ({ isLoggedIn, userName, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/'); // 登出後回到首頁
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>JS 探索</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/features" style={{ color: 'inherit', textDecoration: 'none' }}>特性</Link></li>
        <li><Link to="/evolution" style={{ color: 'inherit', textDecoration: 'none' }}>演進史</Link></li>
        <li><Link to="/architecture" style={{ color: 'inherit', textDecoration: 'none' }}>框架</Link></li>
        <li><Link to="/terminal" style={{ color: 'inherit', textDecoration: 'none' }}>指令</Link></li>
        <li><Link to="/learning" style={{ color: 'inherit', textDecoration: 'none' }}>學習</Link></li>
        {isLoggedIn && (
          <li>
            <Link to="/notebook" style={{ color: 'inherit', textDecoration: 'none' }}>
              筆記本
            </Link>
          </li>
        )}
        <li><Link to="/references" style={{ color: 'inherit', textDecoration: 'none' }}>資源</Link></li>
      </ul>
      
      {/* 🌟 根據是否登入，顯示對應的區塊 */}
      <div className="auth-section" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
        {isLoggedIn ? (
          <>
            <span style={{ fontSize: '0.95rem' }}>哈囉, <span style={{ color: '#f7df1e', fontWeight: 'bold' }}>{userName}</span></span>
            <button 
              onClick={handleLogoutClick}
              style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid #fff', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
            >
              登出
            </button>
          </>
        ) : (
          <Link to="/login" style={{ backgroundColor: '#f7df1e', color: '#000', padding: '0.4rem 1rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}>
            登入
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;