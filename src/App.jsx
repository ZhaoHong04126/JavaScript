import React from 'react'; // 移除了不再使用的 useState
import './App.css';

// --- 1. 頁首元件 (Hero) ---
const HeroSection = () => {
  const handleStartLearning = () => {
    const targetSection = document.getElementById('features');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hero">
      <h1>深入解析 JavaScript</h1>
      <p>驅動現代互動式網頁與全端開發的核心程式語言</p>
      <button className="cta-button" onClick={handleStartLearning}>
        開始學習
      </button>
    </header>
  );
};

// --- 2. 核心特性元件 (Features) ---
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

// --- 3. 演進史時間軸元件 (Evolution) ---
const EvolutionSection = () => {
  const milestones = [
    { year: "1995", title: "JavaScript 誕生", description: "Brendan Eich 在 10 天內為 Netscape 瀏覽器開發出最初版本。" },
    { year: "1997", title: "ECMAScript 標準化", description: "為了避免各家瀏覽器語法不一，交由 ECMA 國際組織制定標準 (ES1)。" },
    { year: "2009", title: "Node.js 與 ES5", description: "Node.js 讓 JavaScript 跨出瀏覽器走向後端；ES5 帶來 JSON 支援與嚴格模式。" },
    { year: "2015", title: "ES6 (ES2015) 革命", description: "現代 JS 的重大轉捩點！引入 let/const、箭頭函式、Class 與 Promise 等強大特性。" },
    { year: "現在", title: "全端與無所不在", description: "搭配 TypeScript、React/Vue 等前端框架，成為世界上最受歡迎的語言之一。" }
  ];

  return (
    <section className="evolution-section">
      <h2>JavaScript 的演進史</h2>
      <div className="timeline">
        {milestones.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 4. 框架與全端架構元件 (Frameworks & Architecture) ---
const FrameworksAndArchitecture = () => (
  <section className="architecture-section">
    <h2>從前端框架到全端架構</h2>

    <div className="frameworks-container">
      <h3>🌟 現代前端三大框架</h3>
      <div className="framework-grid">
        <div className="framework-card angular">
          <h4>Angular (2010)</h4>
          <p>由 Google 開發，是早期的霸主。採用完整的 MVC 架構，擁有極度嚴謹的規範，適合大型企業級應用，但學習曲線較為陡峭。</p>
        </div>
        <div className="framework-card react">
          <h4>React (2013)</h4>
          <p>由 Meta (Facebook) 推出，也就是<strong>您現在正在使用的！</strong>首創 Virtual DOM 與元件化 (Component) 設計，目前生態系最龐大。</p>
        </div>
        <div className="framework-card vue">
          <h4>Vue (2014)</h4>
          <p>由尤雨溪開發。結合了 Angular 的易讀性與 React 的元件概念，以易學、靈活、漸進式開發著稱。</p>
        </div>
      </div>
    </div>

    <div className="structure-container">
      <h3>📂 三大框架：檔案設計哲學大車拚</h3>
      <p>不同的核心理念，造就了完全不同的檔案擺放與開發方式：</p>
      <div className="framework-structure-grid">
        <div className="structure-card angular-struct">
          <h4 style={{color: '#dd0031'}}>Angular：強制分工</h4>
          <p>極度嚴謹，將邏輯、畫面、樣式強制切開。</p>
          <ul className="structure-list">
            <li><code>app.component.ts</code> (邏輯)</li>
            <li><code>app.component.html</code> (模板)</li>
            <li><code>app.component.css</code> (樣式)</li>
            <li><code>app.module.ts</code> (模組註冊)</li>
          </ul>
        </div>
        <div className="structure-card react-struct">
          <h4 style={{color: '#61dafb'}}>React：All in JS</h4>
          <p>極度自由，把 HTML 寫進 JavaScript 裡。</p>
          <ul className="structure-list">
            <li><code>App.jsx</code> (畫面邏輯合一)</li>
            <li><code>components/</code> (共用元件)</li>
            <li><code>hooks/</code> (自訂狀態邏輯)</li>
            <li><code>context/</code> (全域狀態)</li>
          </ul>
        </div>
        <div className="structure-card vue-struct">
          <h4 style={{color: '#4fc08d'}}>Vue：單一元件檔</h4>
          <p>優雅整合，一個檔案搞定一個功能區塊。</p>
          <ul className="structure-list">
            <li><code>App.vue</code> (單一檔案)</li>
            <li>&nbsp;&nbsp;├─ <code>&lt;template&gt;</code></li>
            <li>&nbsp;&nbsp;├─ <code>&lt;script&gt;</code></li>
            <li>&nbsp;&nbsp;└─ <code>&lt;style scoped&gt;</code></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="backend-container">
      <h3>⚙️ 那後端的 JavaScript (Node.js) 長怎樣？</h3>
      <p>前端負責「畫面與互動」，後端則負責「資料與邏輯」。如果您用 Node.js 寫後端，檔案結構通常如下：</p>
      <div className="backend-grid">
        <div className="backend-item">
          <strong><code>routes/</code></strong>
          <p>定義 API 的網址路徑（例如造訪 <code>/api/users</code>）。</p>
        </div>
        <div className="backend-item">
          <strong><code>controllers/</code></strong>
          <p>控制中心。收到請求後，負責執行商業邏輯。</p>
        </div>
        <div className="backend-item">
          <strong><code>models/</code></strong>
          <p>定義資料庫結構，例如宣告 User 必須包含信箱。</p>
        </div>
        <div className="backend-item">
          <strong><code>.env</code></strong>
          <p>超級機密檔案！存放資料庫密碼或 API 金鑰。</p>
        </div>
      </div>
    </div>
  </section>
);

// --- 5. 進階概念元件 (Advanced Concepts) ---
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

// --- 6. 網路參考連結元件 (Reference Links) ---
const ReferenceLinks = () => {
  const links = [
    {
      title: "MDN Web Docs",
      description: "Mozilla 維護的開發者社群，最權威、最詳細的 JavaScript 語法字典與教學。",
      url: "https://developer.mozilla.org/zh-TW/docs/Web/JavaScript",
      icon: "📚"
    },
    {
      title: "JavaScript.info",
      description: "從基礎到高階的現代 JavaScript 教學，圖文並茂且包含豐富範例。",
      url: "https://javascript.info/",
      icon: "💡"
    },
    {
      title: "React 官方文件",
      description: "學習 React (react.dev) 的最佳起點，掌握現代前端元件化開發。",
      url: "https://react.dev/",
      icon: "⚛️"
    },
    {
      title: "Node.js 官方網站",
      description: "讓 JavaScript 運行在伺服器端的執行環境，探索全端開發的入口。",
      url: "https://nodejs.org/",
      icon: "🟩"
    }
  ];

  return (
    <section className="references-section">
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

// --- 7. 頁尾元件 (Footer) ---
const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} JavaScript 專業探索. 採用 React.js 建置.</p>
  </footer>
);

// --- 8. 主元件 (App) ---
function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <main>
        <FeaturesSection />
        <EvolutionSection />
        <FrameworksAndArchitecture /> 
        <AdvancedConcepts />
        {/* 替換為參考連結元件 👇 */}
        <ReferenceLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;