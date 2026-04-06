import React from 'react';

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

export default EvolutionSection;