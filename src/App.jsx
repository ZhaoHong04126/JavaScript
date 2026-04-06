import React, { useState, useEffect } from 'react'; // 👈 增加引入 useState, useEffect
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 引入各個元件
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import EvolutionSection from './components/EvolutionSection';
import FrameworksAndArchitecture from './components/FrameworksAndArchitecture';
import TerminalCommands from './components/TerminalCommands';
import AdvancedConcepts from './components/AdvancedConcepts';
import ReferenceLinks from './components/ReferenceLinks';
import Footer from './components/Footer';
import TeachingSection from './components/TeachingSection';
import JsxTutorial from './components/JsxTutorial';
import LearningChecklist from './components/LearningChecklist';
import JsNotebook from './components/JsNotebook';
import Login from './components/Login'; // 👈 引入剛寫好的登入元件

function App() {
  // 建立全域的登入狀態
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // 網頁初次載入時，檢查 localStorage 是否有登入紀錄
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserName(storedUser);
    }
  }, []);

  // 處理登入成功的邏輯
  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem('currentUser', name); // 把名字存進瀏覽器
  };

  // 處理登出的邏輯
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    localStorage.removeItem('currentUser'); // 清除瀏覽器紀錄
  };

  return (
    <div className="app-container">
      {/* 將狀態傳給 Navbar，讓他知道現在是誰登入 */}
      <Navbar isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout} />
      
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}> 
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeaturesSection />} />
          <Route path="/evolution" element={<EvolutionSection />} />
          <Route path="/architecture" element={<FrameworksAndArchitecture />} />
          <Route path="/terminal" element={<TerminalCommands />} />
          <Route path="/learning" element={
            <>
              <AdvancedConcepts />
              <TeachingSection />
              <JsxTutorial />
              <LearningChecklist />
            </>
          } />
          <Route path="/notebook" element={<JsNotebook />} />
          
          {/* 🌟 加入登入頁面的路由，並傳入處理登入的函式 */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          
          <Route path="/references" element={<ReferenceLinks />} />
        </Routes>
        
        <Footer />
      </main>
    </div>
  );
}

export default App;