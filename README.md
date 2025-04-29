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

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    The app will open in your default browser at `http://localhost:3000`.

## Usage

Here's how to interact with the application:

1.  **Register a Patient:**
    *   Fill out the form on the left side of the page with the patient's details.
    *   Click the **Register** button.
    *   A success or error message will appear below the form indicating the result of the registration attempt.

2.  **Run SQL Queries:**
    *   In the right panel, you'll find a textarea containing a default SQL query (`SELECT * FROM patients;`).
    *   You can edit the SQL query within this textarea.
    *   Click the **Run** button below the textarea.
    *   The results of your query will be displayed in JSON format below the button.

3.  **Multi-Tab Support:**
    *   Open another tab or window in your browser and go to `http://localhost:3000`.
    *   You will see the same data (e.g., newly registered patients) reflected across all open tabs accessing the application, demonstrating shared state or data synchronization.


##Author : Aaditya


