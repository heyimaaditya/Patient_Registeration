import React, { useEffect, useState } from 'react';
import { initDB } from './db';
import RegisterForm from './components/RegisterForm';
import QueryPanel from './components/QueryPanel';
import './App.css';

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initDB().then(() => setReady(true));
  }, []);

  if (!ready) return <div className="loading">Loading database…</div>;

  return (
    <div className="container">
      <h1>Patient Registration</h1>
      <div className="panels">
        <RegisterForm />
        <QueryPanel />
      </div>
    </div>
  );
}

export default App;

