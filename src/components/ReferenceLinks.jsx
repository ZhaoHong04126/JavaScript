import React from 'react';

const ReferenceLinks = () => {
  const links = [
    { title: "MDN Web Docs", description: "Mozilla 維護的開發者社群，最權威、最詳細的 JavaScript 語法字典與教學。", url: "https://developer.mozilla.org/zh-TW/docs/Web/JavaScript", icon: "📚" },
    { title: "JavaScript.info", description: "從基礎到高階的現代 JavaScript 教學，圖文並茂且包含豐富範例。", url: "https://javascript.info/", icon: "💡" },
    { title: "React 官方文件", description: "學習 React (react.dev) 的最佳起點，掌握現代前端元件化開發。", url: "https://react.dev/", icon: "⚛️" },
    { title: "Node.js 官方網站", description: "讓 JavaScript 運行在伺服器端的執行環境，探索全端開發的入口。", url: "https://nodejs.org/", icon: "🟩" }
  ];

  return (
    <section id="references" className="references-section">
      <h2>網路參考連結</h2>
      <p className="references-subtitle">準備好繼續深入學習了嗎？這些是業界強烈推薦的優質資源：</p>
      <div className="references-grid">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="reference-card">
            <div className="reference-icon">{link.icon}</div>
            <div className="reference-content">
              <h4>{link.title}</h4>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ReferenceLinks;