import React, { useState } from 'react';

const JsxTutorial = () => {
  // 供互動教學使用的狀態
  const [userName, setUserName] = useState('React 新手');
  const [avatarUrl, setAvatarUrl] = useState('https://react.dev/favicon.ico');

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>✍️ JSX 語法完全指南</h2>
      <p style={styles.subtitle}>將 HTML 的結構與 JavaScript 的邏輯完美融合</p>

      <div style={styles.grid}>
        
        {/* 觀念 1：什麼是 JSX */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>1. 什麼是 JSX？</h3>
          <p style={styles.text}>
            JSX 是 JavaScript 的語法擴充。它產生 React「element」。比起把標籤跟邏輯拆成不同檔案，React 將它們包裝成「Component」。
          </p>
          <pre style={styles.codeBlock}>
            <code>{`const element = <h1>你好，世界！</h1>;`}</code>
          </pre>
        </div>

        {/* 觀念 2：嵌入 Expression (加入互動功能) */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>2. 嵌入 JavaScript 表達式</h3>
          <p style={styles.text}>
            你可以用大括號 <code>{`{ }`}</code> 將任何合法的 JS 表達式（變數、運算、函式回傳值）嵌入 JSX 中。
          </p>
          <div style={styles.interactiveBox}>
            <div style={styles.inputGroup}>
              <label>試著修改名字：</label>
              <input 
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.codeResult}>
              <code style={{color: '#a8ff60'}}>{`<h1>Hello, {userName}!</h1>`}</code>
              <div style={styles.preview}>
                <strong>畫面即時渲染：</strong> <span style={{ color: '#f7df1e' }}>Hello, {userName}!</span>
              </div>
            </div>
          </div>
        </div>

        {/* 觀念 3：指定屬性 (Attributes) */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>3. 在 JSX 中指定屬性</h3>
          <p style={styles.text}>
            JSX 更接近 JS，所以屬性採用 <strong>camelCase (駝峰式)</strong> 命名，例如 HTML 的 <code>class</code> 要寫成 <code>className</code>。
          </p>
          <ul style={styles.list}>
            <li><strong>字串屬性</strong>使用引號：<br/><code>{`<a href="https://react.dev">`}</code></li>
            <li><strong>變數屬性</strong>使用大括號：<br/><code>{`<img src={user.avatarUrl} />`}</code></li>
          </ul>
        </div>

        {/* 觀念 4：指定 Children 與防範注入 */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>4. 防範 XSS 注入攻擊</h3>
          <p style={styles.text}>
            你可以安全地在 JSX 中嵌入使用者輸入。React DOM 預設會在渲染前將變數轉換為字串，自動防範 XSS（跨網站指令碼）攻擊。
          </p>
          <pre style={styles.codeBlock}>
            <code>
{`const title = response.potentiallyMaliciousInput;
// 這是安全的：
const element = <h1>{title}</h1>;`}
            </code>
          </pre>
        </div>

        {/* 觀念 5：JSX 其實是個 JavaScript 物件 */}
        <div style={{...styles.card, gridColumn: '1 / -1'}}>
          <h3 style={styles.cardTitle}>5. JSX 的本質代表物件</h3>
          <p style={styles.text}>
            Babel 會將 JSX 編譯為呼叫 <code>React.createElement()</code> 的程式碼。因此 JSX 本身也是一個 JS 表達式，你可以把它當作參數傳遞，或是從函式中回傳！
          </p>
          <pre style={styles.codeBlock}>
            <code>
{`// 你的 JSX 寫法：
const element = <h1 className="greeting">Hello, World!</h1>;

// 被編譯後的 JavaScript：
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);`}
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
};

// --- 獨立元件的樣式 ---
const styles = {
  section: {
    padding: '5rem 2rem',
    backgroundColor: '#1a1a1a', // 為了突顯程式碼區塊，給它一個深色背景區段
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#f7df1e',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#bbb',
    marginBottom: '3rem',
    fontSize: '1.1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'left'
  },
  card: {
    backgroundColor: '#2d2d2d',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #444',
    display: 'flex',
    flexDirection: 'column'
  },
  cardTitle: {
    color: '#61dafb', // React 藍色
    marginTop: 0,
    fontSize: '1.3rem',
    borderBottom: '1px solid #444',
    paddingBottom: '0.5rem'
  },
  text: {
    color: '#ccc',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  },
  codeBlock: {
    backgroundColor: '#1e1e1e',
    padding: '1rem',
    borderRadius: '6px',
    border: '1px solid #333',
    color: '#e6e6e6',
    overflowX: 'auto',
    fontFamily: "ui-monospace, Consolas, Monaco, monospace",
    fontSize: '0.9rem',
    marginTop: 'auto'
  },
  list: {
    color: '#ccc',
    lineHeight: '1.8',
    paddingLeft: '1.2rem'
  },
  interactiveBox: {
    backgroundColor: '#222',
    padding: '1rem',
    borderRadius: '6px',
    border: '1px dotted #61dafb',
    marginTop: '1rem'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
    outline: 'none'
  },
  codeResult: {
    backgroundColor: '#111',
    padding: '0.8rem',
    borderRadius: '4px',
    fontSize: '0.95rem'
  },
  preview: {
    marginTop: '0.8rem',
    borderTop: '1px dashed #444',
    paddingTop: '0.8rem'
  }
};

export default JsxTutorial;