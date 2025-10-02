# Keeper - Note Keeping WebApp

A simple note-keeping application where users can **create, view, and delete notes**. Built with **Node.js, Express, and PostgreSQL** for backend.

## Features

* **Create Notes:** Add new notes with a title and content.
* **View Notes:** Fetch all existing notes.
* **Delete Notes:** Remove notes you no longer need.
* **Persistent Storage:** Notes are stored in a PostgreSQL database.

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL
* **API Requests:** Axios, CORS
* **Environment Variables:** dotenv

## Setup Instructions

1. **Clone the repo:**

```bash
git clone <repo_url>
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Setup `.env` file:**

Create a `.env` file in the backend root:

```env
BACKEND_PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=1234
DB_DATABASE=keeper
DB_PORT=5432
BACKEND_URL=http://localhost:3000
```

4. **Create PostgreSQL database:**

```sql
CREATE DATABASE keeper;
```

5. **Start the backend server:**

```bash
npm run dev
```

6. **API Endpoints:**

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | /getAllNotes    | Fetch all notes     |
| POST   | /addNewNote     | Add a new note      |
| POST   | /deleteNote/:id | Delete a note by ID |

---

**Note:** Make sure PostgreSQL is running and the credentials in `.env` match your local setup.


