import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // 防止表單送出時重新整理頁面
    
    // 簡單的防呆檢查
    if (account.trim() === '' || password === '') {
      setError('帳號與密碼不能為空喔！');
      return;
    }

    // 模擬登入成功：呼叫上層傳遞下來的 onLogin 函式，並儲存帳號名稱
    onLogin(account);
    navigate('/notebook'); // 登入成功後，自動跳轉到筆記本頁面
  };

  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 會員登入</h2>
        <p style={styles.subtitle}>請輸入任意帳號密碼來模擬登入體驗</p>
        
        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>帳號</label>
            <input 
              type="text" 
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="請輸入帳號 (例如: admin)"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>密碼</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="請輸入密碼"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            登入
          </button>
        </form>
      </div>
    </section>
  );
};

// 登入頁面的樣式
const styles = {
  section: {
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f9fafb'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.8rem',
    color: '#333'
  },
  subtitle: {
    color: '#666',
    marginBottom: '2rem',
    fontSize: '0.95rem'
  },
  error: {
    backgroundColor: '#ffebeb',
    color: '#ff4d4f',
    padding: '0.8rem',
    borderRadius: '6px',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    border: '1px solid #ffccc7'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    textAlign: 'left'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontWeight: 'bold',
    color: '#444'
  },
  input: {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none'
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#f7df1e',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '0.5rem',
    transition: 'transform 0.1s'
  }
};

export default Login;