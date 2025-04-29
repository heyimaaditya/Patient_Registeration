import React, { useState } from 'react';
import db from '../db';
import './QueryPanel.css';

export default function QueryPanel() {
  const [sql, setSql] = useState('SELECT * FROM patients;');
  const [output, setOutput] = useState('');

  const run = async () => {
    try {
      const { rows } = await db.query(sql);
      setOutput(JSON.stringify(rows, null, 2));
    } catch (err) {
      setOutput(`Error: ${err.message}`);
    }
  };

  return (
    <div className="card">
      <h2>Query Records</h2>
      <textarea
        value={sql}
        onChange={e => setSql(e.target.value)}
        rows={4}
      />
      <button onClick={run}>Run</button>
      <pre className="result">{output}</pre>
    </div>
  );
}
