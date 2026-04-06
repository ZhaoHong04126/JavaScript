import React from 'react';

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

export default FrameworksAndArchitecture;