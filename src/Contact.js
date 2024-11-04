import './App.css';
import React from 'react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contactMethod: 'email',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea placeholder="Message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        <select onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="text">Text</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div className="submission-preview">
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
          <p>Preferred Contact Method: {submittedData.contactMethod}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
