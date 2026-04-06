import React, { useState } from 'react';

const TeachingSection = () => {
  // 1. 定義教學字卡的資料與狀態
  const [cards, setCards] = useState([
    { 
      id: 1, 
      question: '什麼是 DOM？', 
      answer: 'Document Object Model（文件物件模型）。瀏覽器將 HTML 解析成樹狀結構，讓 JavaScript 可以動態操作與修改網頁內容。',
      flipped: false 
    },
    { 
      id: 2, 
      question: '什麼是 Virtual DOM？', 
      answer: 'React 用來優化效能的核心技術。它在記憶體中建立一份輕量級的 DOM 複本，當資料改變時先比對差異 (Diffing)，再一次性、最小幅度地更新實際畫面。',
      flipped: false 
    },
    { 
      id: 3, 
      question: '什麼是 Hook？', 
      answer: 'React 16.8 引入的強大功能。讓開發者在不寫傳統 Class 的情況下，也能在 Function Component 中使用狀態 (useState) 與生命週期 (useEffect)。',
      flipped: false 
    },
    { 
      id: 4, 
      question: 'let、const 與 var 的差別？', 
      answer: 'var 有變數提升(Hoisting)且是函式作用域。現代 JS 推薦使用 let (可變動的值) 與 const (不可變動的常數)，它們皆為區塊作用域，能減少潛在 bug。',
      flipped: false 
    }
  ]);

  // 2. 翻轉字卡的處理函式
  const toggleCard = (id) => {
    const updatedCards = cards.map(card => 
      card.id === id ? { ...card, flipped: !card.flipped } : card
    );
    setCards(updatedCards);
  };

  // 3. 畫面渲染
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>🧠 互動教學：核心觀念翻翻卡</h2>
      <p style={styles.subtitle}>點擊字卡來查看詳細解答！</p>
      
      <div style={styles.grid}>
        {cards.map((card) => (
          <div 
            key={card.id} 
            style={{
              ...styles.card,
              backgroundColor: card.flipped ? '#f7df1e' : '#fff',
              color: card.flipped ? '#000' : '#333',
              transform: card.flipped ? 'scale(1.02)' : 'scale(1)'
            }}
            onClick={() => toggleCard(card.id)}
          >
            <div style={styles.cardInner}>
              <h3 style={{ ...styles.cardText, fontSize: card.flipped ? '1.1rem' : '1.3rem', fontWeight: card.flipped ? 'normal' : 'bold' }}>
                {card.flipped ? card.answer : card.question}
              </h3>
              <div style={styles.clickHint}>
                {card.flipped ? '👆 點擊翻回正面' : '👆 點擊看解答'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- 元件專屬樣式 ---
const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#f9fafb',
    textAlign: 'center',
    borderTop: '1px solid #eee',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#666',
    marginBottom: '3rem',
    fontSize: '1.1rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    border: '2px solid #e5e7eb',
    borderRadius: '12px',
    padding: '2rem 1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  },
  cardInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between'
  },
  cardText: {
    margin: 0,
    lineHeight: '1.6',
  },
  clickHint: {
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    opacity: 0.6,
    fontWeight: 'bold'
  }
};

export default TeachingSection;