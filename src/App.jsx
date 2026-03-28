import React from 'react';
import './App.css';

// --- 0. 導覽列元件 (Navbar) ---
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
        JS 探索
      </div>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection('features')}>特性</li>
        <li onClick={() => scrollToSection('evolution')}>演進史</li>
        <li onClick={() => scrollToSection('architecture')}>框架</li>
        <li onClick={() => scrollToSection('terminal')}>指令</li>
        <li onClick={() => scrollToSection('references')}>資源</li>
      </ul>
    </nav>
  );
};

// --- 1. 頁首元件 (Hero) ---
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
    { year: "1995", title: "JavaScript 誕生", description: "網景工程師布蘭登·艾克僅花十天就設計出原型。最初命名為 Mocha，後改為 LiveScript，同年底為搭上 Java 熱潮而正式定名為 JavaScript。" },
    { year: "1997", title: "ECMAScript 標準化", description: "因微軟推出 JScript 導致瀏覽器大戰與標準混亂，網景向 ECMA 提交標準，於 1997 年制定了以 JavaScript 為基礎的 ECMAScript 規範 (ECMA-262)。" },
    { year: "2005", title: "AJAX 復興時期", description: "傑西·賈瑞特提出「AJAX」一詞，讓網頁能在背景載入資料而不需重新整理頁面。這項技術的普及引發了 JavaScript 的復興與開源社群的爆發。" },
    { year: "2009", title: "Node.js 與 ES5", description: "瑞安·達爾建立的 Node.js 讓 JavaScript 成功跨出網頁瀏覽器，成為獨立的伺服器端執行環境；同年底也發布了 ECMAScript 5 語言標準。" },
    { year: "2015", title: "ES6 走向成熟", description: "ECMAScript 6 (ES2015) 發布，為語言帶來了廣泛的語法補充與改進。如今的 JavaScript 已擁有無數的庫與框架，並被世界絕大多數網站使用。" }
  ];

  return (
    <section id="evolution" className="evolution-section">
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
  <section id="architecture" className="architecture-section">
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

// --- 5. 終端機指令元件 (Terminal Commands) ---
const TerminalCommands = () => {
  const commands = [
    { cmd: "npm create vite@latest my-project", desc: "使用 Vite 快速建立一個全新的現代前端專案。" },
    { cmd: "npm install", desc: "根據 package.json 安裝專案所需的所有套件與相依模組。" },
    { cmd: "npm run dev", desc: "啟動本地端的開發伺服器，讓你在瀏覽器即時預覽修改的結果。" },
    { cmd: "npm run build", desc: "將專案打包、壓縮，轉換成瀏覽器能讀懂的純靜態檔案，準備上線。" }
  ];

  return (
    <section id="terminal" className="terminal-section">
      <h2>必學的終端機指令</h2>
      <p className="section-subtitle">作為現代前端開發者，這些是您天天都會用到的 Node.js / npm 核心指令：</p>
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">bash - VS Code</span>
        </div>
        <div className="terminal-body">
          {commands.map((c, index) => (
            <div key={index} className="command-group">
              <div className="command-line">
                <span className="prompt">$</span>
                <span className="command">{c.cmd}</span>
              </div>
              <div className="command-desc"># {c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. 進階概念元件 (Advanced Concepts) ---
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

// --- 7. 網路參考連結元件 (Reference Links) ---
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

// --- 8. 頁尾元件 (Footer) ---
const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} JavaScript 專業探索. 採用 React.js 建置.</p>
  </footer>
);

// --- 主元件 (App) ---
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <main>
        <FeaturesSection />
        <EvolutionSection />
        <FrameworksAndArchitecture /> 
        <TerminalCommands />
        <AdvancedConcepts />
        <ReferenceLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;