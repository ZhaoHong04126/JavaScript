import React from 'react';

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

export default AdvancedConcepts;