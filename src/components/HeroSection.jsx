import React from 'react';

const HeroSection = () => {
  const handleStartLearning = () => {
    const targetSection = document.getElementById('features');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
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