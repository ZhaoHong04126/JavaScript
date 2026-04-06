import React, { useState, useEffect } from 'react';
// 1. 引入剛剛建立好的 supabase client
import { supabase } from '../supabaseClient'; 

const JsNotebook = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // 2. 初次載入元件時，從 Supabase 抓取資料
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('id', { ascending: true }); // 根據 ID 排序
    
    if (error) {
      console.error('讀取筆記失敗:', error);
    } else {
      setNotes(data || []); // 將資料存入 state
    }
  };

  // 3. 新增筆記 (寫入 Supabase)
  const handleAddNote = async () => {
    if (newNote.trim() === '') return;
    
    const noteItem = {
      text: newNote,
      date: new Date().toLocaleString()
    };

    // 使用 insert 寫入資料庫，並加上 .select() 讓它回傳寫入成功的那筆資料 (包含 DB 自動產生的 ID)
    const { data, error } = await supabase
      .from('notes')
      .insert([noteItem])
      .select();

    if (error) {
      console.error('新增筆記失敗:', error);
    } else if (data) {
      setNotes([...notes, data[0]]); // 把資料庫回傳的完整資料加進畫面
      setNewNote('');
    }
  };

  // 4. 刪除筆記 (從 Supabase 刪除)
  const handleDeleteNote = async (id) => {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id); // 告訴資料庫要刪除哪一個 ID

    if (error) {
      console.error('刪除筆記失敗:', error);
    } else {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  // 啟動修改模式
  const handleStartEdit = (note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  // 取消修改
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // 5. 儲存修改後的筆記 (更新 Supabase)
  const handleSaveEdit = async (id) => {
    if (editText.trim() === '') return;
    
    const newDate = new Date().toLocaleString() + ' (已編輯)';
    
    // 使用 update 更新資料庫中的對應 ID
    const { error } = await supabase
      .from('notes')
      .update({ text: editText, date: newDate })
      .eq('id', id);

    if (error) {
      console.error('更新筆記失敗:', error);
    } else {
      // 資料庫更新成功後，才更新畫面
      const updatedNotes = notes.map(note => 
        note.id === id 
          ? { ...note, text: editText, date: newDate } 
          : note
      );
      setNotes(updatedNotes);
      setEditingId(null);
      setEditText('');
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>📝 專屬 JS 筆記本</h2>
      <p style={styles.subtitle}>這些筆記現在會即時同步到 Supabase 資料庫！</p>

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
              {editingId === note.id ? (
                // --- 編輯模式 UI ---
                <div style={styles.editContainer}>
                  <textarea
                    style={styles.textarea}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    rows="4"
                  />
                  <div style={styles.editActions}>
                    <button style={styles.saveButton} onClick={() => handleSaveEdit(note.id)}>
                      儲存
                    </button>
                    <button style={styles.cancelButton} onClick={handleCancelEdit}>
                      取消
                    </button>
                  </div>
                </div>
              ) : (
                // --- 一般顯示模式 UI ---
                <>
                  <p style={styles.noteText}>{note.text}</p>
                  <div style={styles.noteFooter}>
                    <span style={styles.noteDate}>{note.date}</span>
                    <div style={styles.actionButtons}>
                      <button 
                        style={styles.editButton} 
                        onClick={() => handleStartEdit(note)}
                      >
                        修改
                      </button>
                      <button 
                        style={styles.deleteButton} 
                        onClick={() => handleDeleteNote(note.id)}
                      >
                        刪除
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

// 樣式保持不變
const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #eee'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
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
    backgroundColor: '#f7df1e',
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
    whiteSpace: 'pre-wrap',
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
  actionButtons: {
    display: 'flex',
    gap: '0.5rem'
  },
  editButton: {
    padding: '0.4rem 0.8rem',
    backgroundColor: '#1890ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem'
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
  editContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  editActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem'
  },
  saveButton: {
    padding: '0.4rem 1rem',
    backgroundColor: '#52c41a',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  cancelButton: {
    padding: '0.4rem 1rem',
    backgroundColor: '#d9d9d9',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  emptyText: {
    color: '#999',
    fontStyle: 'italic',
    marginTop: '2rem',
    textAlign: 'center'
  }
};

export default JsNotebook;