import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* 點擊標題回到首頁 */}
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>JS 探索</Link>
      </div>
      <ul className="navbar-links">
        {/* 改用 Link 元件進行路由跳轉 */}
        <li><Link to="/features" style={{ color: 'inherit', textDecoration: 'none' }}>特性</Link></li>
        <li><Link to="/evolution" style={{ color: 'inherit', textDecoration: 'none' }}>演進史</Link></li>
        <li><Link to="/architecture" style={{ color: 'inherit', textDecoration: 'none' }}>框架</Link></li>
        <li><Link to="/terminal" style={{ color: 'inherit', textDecoration: 'none' }}>指令</Link></li>
        <li><Link to="/learning" style={{ color: 'inherit', textDecoration: 'none' }}>學習</Link></li>
        <li><Link to="/references" style={{ color: 'inherit', textDecoration: 'none' }}>資源</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;