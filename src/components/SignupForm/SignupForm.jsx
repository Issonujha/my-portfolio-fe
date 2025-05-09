import React, { useState } from 'react';
import styles from './SignupForm.module.css';
import { registerUser } from '../../api/auth';

export const SignupForm = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await registerUser(formData);
      setSuccess('Signup successful! You can now log in.');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form className={styles.signupForm} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Sign Up</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Sign Up</button>
    </form>
  );
};
