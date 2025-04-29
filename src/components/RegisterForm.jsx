import React, { useState } from 'react';
import db from '../db';
import './RegisterForm.css';

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', age: '', email: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(f => ({ ...f, [id]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, age, email } = form;
    if (!name || !age || !email) {
      setMsg('All fields are required');
      return;
    }
    try {
      await db.query(
        `INSERT INTO patients (name, age, email) VALUES ($1, $2, $3);`,
        [name.trim(), Number(age), email.trim()]
      );
      setMsg(`✅ "${name}" registered!`);
      setForm({ name: '', age: '', email: '' });
    } catch (err) {
      console.error(err);
      setMsg(`❌ ${err.message}`);
    }
  };

  return (
    <div className="card">
      <h2>Register New Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          id="age"
          type="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          min="0"
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
