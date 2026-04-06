import React from 'react';

const FeatureCard = ({ title, description, icon }) => (
  <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { title: "無所不在的生態系", description: "從前端的 React/Vue 到後端的 Node.js，甚至手機 App，JavaScript 幾乎無處不在。", icon: "🌐" },
    { title: "非同步處理能力", description: "透過 Event Loop、Promises 與 async/await，輕鬆處理 API 請求與高併發任務。", icon: "⚡" },
    { title: "豐富的套件庫", description: "NPM 擁有全球最大的開源套件庫，為開發者提供無限的擴充套件與工具。", icon: "📦" }
  ];

  return (
    <section id="features" className="features-section">
      <h2>為什麼 JavaScript 如此重要？</h2>
      <div className="features-grid">
        {features.map((feat, index) => (
          <FeatureCard key={index} {...feat} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;