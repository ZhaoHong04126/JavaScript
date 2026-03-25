import React from 'react';
import './App.css';

// --- 子元件定義 ---

const HeroSection = () => (
  <header className="hero">
    <h1>深入解析 JavaScript</h1>
    <p>驅動現代互動式網頁與全端開發的核心程式語言</p>
    <button className="cta-button">開始學習</button>
  </header>
);

const FeatureCard = ({ title, description, icon }) => (
  <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "無所不在的生態系",
      description: "從前端的 React/Vue 到後端的 Node.js，甚至手機 App (React Native)，JavaScript 幾乎無處不在。",
      icon: "🌐"
    },
    {
      title: "非同步處理能力",
      description: "透過 Event Loop、Promises 與 async/await，輕鬆處理 API 請求與高併發任務。",
      icon: "⚡"
    },
    {
      title: "豐富的套件庫",
      description: "NPM 擁有全球最大的開源套件庫，為開發者提供無限的擴充套件與工具。",
      icon: "📦"
    }
  ];

  return (
    <section className="features-section">
      <h2>為什麼 JavaScript 如此重要？</h2>
      <div className="features-grid">
        {features.map((feat, index) => (
          <FeatureCard key={index} {...feat} />
        ))}
      </div>
    </section>
  );
};

const AdvancedConcepts = () => (
  <section className="advanced-concepts">
    <h2>核心與進階概念</h2>
    <div className="concept-list">
      <div className="concept-item">
        <h4>ES6+ 現代語法</h4>
        <p>解構賦值、箭頭函式、模組化 (ES Modules) 讓程式碼更加簡潔且易於維護。</p>
      </div>
      <div className="concept-item">
        <h4>原型鍊 (Prototype Chain)</h4>
        <p>理解 JavaScript 獨特的物件繼承機制，是掌握進階物件導向設計的關鍵。</p>
      </div>
      <div className="concept-item">
        <h4>閉包 (Closures)</h4>
        <p>函式記住並存取其詞法作用域的能力，常應用於資料封裝與高階函式。</p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} JavaScript 專業探索. 採用 React.js 建置.</p>
  </footer>
);

// --- 主元件 ---

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <main>
        <FeaturesSection />
        <AdvancedConcepts />
      </main>
      <Footer />
    </div>
  );
}

export default App;