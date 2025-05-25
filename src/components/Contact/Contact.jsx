import React, { useState } from 'react';
import styles from './Contact.module.css';
import { sendMail } from '../../api/auth'; // Adjust the import path as necessary

export const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    to: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    // Handle form submission logic here\
        try {
          await sendMail(formData);
        } catch (err) {
        }
    console.log(formData);
    setFormData({
      subject: '',
      to: '',
      body: ''
    });
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactForm}>
        <h2>Contact Us</h2>
        <p>Get in touch</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="to"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="body"
            placeholder="Go ahead, we are listening..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <img
          src="https://sonujha.in/resources/images/profile_photo.jpeg"
          alt="Contact person"
          className={styles.contactImage}
        />
        {/* You might want to add a name here if it represents a specific contact person */}
        {/* <h3 className={styles.contactInfoName}>Sonu Jha</h3> */}
        <p><strong>Location:</strong> Sector 59, Noida</p>
        <p><strong>Phone:</strong> +91 XXXXXXXXXXXX</p>
        <p><strong>Email:</strong> sja9563@gmail.com</p>
      </div>
    </div>
  );
};