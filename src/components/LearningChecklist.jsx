import React, { useState } from 'react';

const LearningChecklist = () => {
  // 1. 定義狀態：預設的學習清單項目
  const [tasks, setTasks] = useState([
    { id: 1, text: '了解 JavaScript 演進史', completed: false },
    { id: 2, text: '學習 React 的元件化 (Component) 概念', completed: false },
    { id: 3, text: '熟悉終端機 (Terminal) 常用指令', completed: false },
    { id: 4, text: '掌握 useState 狀態管理', completed: false }
  ]);

  // 2. 定義功能：處理點擊核取方塊的事件
  const toggleTask = (id) => {
    // 透過 map 迴圈找到被點擊的項目，並反轉它的 completed 狀態
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // 更新狀態，觸發畫面重新渲染
  };

  // 計算已完成的數量
  const completedCount = tasks.filter(task => task.completed).length;
  const progress = Math.round((completedCount / tasks.length) * 100);

  // 3. 畫面渲染 (UI)
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>✅ 我的學習進度打卡</h2>
      
      {/* 進度條 */}
      <div style={styles.progressContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
      </div>
      <p style={styles.progressText}>目前進度：{progress}% ({completedCount} / {tasks.length})</p>

      {/* 清單列表 */}
      <div style={styles.listContainer}>
        {tasks.map(task => (
          <label 
            key={task.id} 
            style={{ 
              ...styles.taskItem, 
              opacity: task.completed ? 0.6 : 1,
              textDecoration: task.completed ? 'line-through' : 'none' 
            }}
          >
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleTask(task.id)} 
              style={styles.checkbox}
            />
            {task.text}
          </label>
        ))}
      </div>
    </section>
  );
};

// 簡單的行內樣式 (Inline Styles) 讓這個元件可以隨插即用
const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  progressContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#e5e7eb',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '0.5rem'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#27c93f',
    transition: 'width 0.3s ease-in-out'
  },
  progressText: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '1rem'
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    textAlign: 'left'
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'all 0.2s'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    marginRight: '1rem',
    cursor: 'pointer'
  }
};

export default LearningChecklist;