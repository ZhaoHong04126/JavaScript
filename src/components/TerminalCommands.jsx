import React from 'react';

const TerminalCommands = () => {
  const commands = [
    { cmd: "npm create vite@latest my-project", desc: "使用 Vite 快速建立一個全新的現代前端專案。" },
    { cmd: "npm install", desc: "安裝專案所需套件。若手動修改了 package.json (如更新版本號)，執行此指令也能自動同步更新 package-lock.json！" },
    { cmd: "npm run dev", desc: "啟動本地端的開發伺服器，讓你在瀏覽器即時預覽修改的結果。" },
    { cmd: "Ctrl + C", desc: "快捷鍵：終止目前正在執行的終端機程序（例如關閉正在執行的本地伺服器）。" },
    { cmd: "npm run lint", desc: "執行 ESLint 檢查程式碼，自動幫你抓出語法錯誤與不符合規範的潛在 Bug。" },
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
                <span className="prompt">{c.cmd.includes('Ctrl') ? '>' : '$'}</span>
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

export default TerminalCommands;