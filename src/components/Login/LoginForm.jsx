import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { loginUser } from '../../api/auth';

export const LoginForm = ({setSelectedTab, onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = await loginUser(credentials);
      onLogin(token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Login</h2>
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Login</button>
    </form>
    <p>Need a new Account ? Signup !! <button onClick={() => setSelectedTab("signup")}>Click Here</button></p>
    </>
  );
};
