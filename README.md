# Patient Registration App

A **frontend-only** React app that lets you register patients and query their records using real Postgres in WebAssembly (PGlite), persisted to IndexedDB for multi-tab support.

---

## Features

- **Register New Patients**  
  Capture name, age, and email—data is stored in a local Postgres-style DB.

- **Run Arbitrary SQL Queries**  
  Inspect or manipulate your data right in the browser.

- **Persistent Storage**  
  Uses IndexedDB under the hood, so data survives refreshes.

- **Multi-Tab Sync**  
  Open the app in multiple tabs and share the same dataset automatically.

---

## Prerequisites

- Node.js ≥ 14  
- npm ≥ 6  

---

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone <repo-url>
   cd patient-registration-app

2)Install dependencies

npm install

3)Start the dev server

npm start
The app will open at http://localhost:3000.

Usage
1)Register a Patient
Fill out the form on the left and click Register.
A success or error message appears below the form.

2)Run SQL
In the right panel, edit the SQL in the textarea (default is SELECT * FROM patients;) and click Run.
Results show up in JSON format.

3)Multi-Tab
Open another tab at http://localhost:3000 and you’ll see the same data—no extra setup needed.

Project Structure

patient-registration-app/
├── public/
│   └── index.html
└── src/
    ├── components/
    │   ├── RegisterForm.jsx
    │   ├── RegisterForm.css
    │   ├── QueryPanel.jsx
    │   └── QueryPanel.css
    ├── db.js
    ├── App.js
    ├── App.css
    ├── index.js
    └── index.css
