import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  // 使用 React Router 的導航 Hook
  const navigate = useNavigate();

  const handleStartLearning = () => {
    // 點擊後跳轉到 features 分頁
    navigate('/features');
  };

  return (
    <header id="hero" className="hero">
      <h1>深入解析 JavaScript</h1>
      <p>驅動現代互動式網頁與全端開發的核心程式語言</p>
      <button className="cta-button" onClick={handleStartLearning}>
        開始學習
      </button>
    </header>
  );
};

export default HeroSection;