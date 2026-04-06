import React, { useState } from 'react';

const JsNotebook = () => {
  // 1. 定義狀態：存放所有筆記的陣列，以及目前正在輸入的文字
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  // 2. 新增筆記的函式
  const handleAddNote = () => {
    // 檢查是否只輸入空白
    if (newNote.trim() === '') return;
    
    // 建立新筆記物件（包含唯一的 id、內容與時間）
    const noteItem = {
      id: Date.now(),
      text: newNote,
      date: new Date().toLocaleString()
    };

    // 更新筆記列表（把舊的筆記展開，加上新的筆記）
    setNotes([...notes, noteItem]);
    setNewNote(''); // 清空輸入框
  };

  // 3. 刪除筆記的函式
  const handleDeleteNote = (id) => {
    // 利用 filter 過濾掉被點擊刪除的那個 id
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>📝 專屬 JS 筆記本</h2>
      <p style={styles.subtitle}>在這裡隨手記錄你的學習心得或容易忘記的語法吧！</p>

      {/* 輸入區塊 */}
      <div style={styles.inputContainer}>
        <textarea
          style={styles.textarea}
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="輸入你的筆記內容... (例如：console.log('Hello World');)"
          rows="4"
        />
        <button style={styles.addButton} onClick={handleAddNote}>
          新增筆記
        </button>
      </div>

      {/* 筆記顯示列表區塊 */}
      <div style={styles.notesList}>
        {notes.length === 0 ? (
          <p style={styles.emptyText}>目前還沒有筆記，趕快寫下第一篇吧！</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} style={styles.noteCard}>
              <p style={styles.noteText}>{note.text}</p>
              <div style={styles.noteFooter}>
                <span style={styles.noteDate}>{note.date}</span>
                <button 
                  style={styles.deleteButton} 
                  onClick={() => handleDeleteNote(note.id)}
                >
                  刪除
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

// 獨立的行內樣式設計，方便隨插即用
const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #eee',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1.1rem'
  },
  inputContainer: {
    maxWidth: '600px',
    margin: '0 auto 2rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  textarea: {
    width: '100%',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  addButton: {
    padding: '0.8rem',
    backgroundColor: '#f7df1e', // JS 黃色
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.1s'
  },
  notesList: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left'
  },
  noteCard: {
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  },
  noteText: {
    margin: '0 0 1rem 0',
    whiteSpace: 'pre-wrap', // 讓換行符號能正常顯示
    lineHeight: '1.6',
    fontSize: '1.05rem'
  },
  noteFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #e5e7eb',
    paddingTop: '0.8rem'
  },
  noteDate: {
    fontSize: '0.85rem',
    color: '#999'
  },
  deleteButton: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem'
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
    marginTop: '2rem'
  }
};

export default JsNotebook;