# 📝 Task Manager

A full-stack Task Management web application built with:

- 🔥 **FastAPI** (Python backend with PostgreSQL)
- ⚡ **Angular** (Frontend UI)
- 🐘 **PostgreSQL** (Database)
- 🚀 Deployed on **Render**

---
---

## 🚀 Features

- ✅ Create, read, update, delete (CRUD) tasks
- 🎯 Track task status (pending / completed)
- 🔄 Sync backend with Angular frontend
- 📦 RESTful API using FastAPI
- 🧪 Swagger docs auto-generated

---

## ⚙️ Prerequisites

- [Python 3.10+](https://www.python.org/downloads/)
- [Node.js (LTS)](https://nodejs.org/) – Recommended: v16
- [PostgreSQL](https://www.postgresql.org/)
- [Angular CLI](https://angular.io/cli) – `npm install -g @angular/cli`
- (Optional) [Virtualenv](https://pypi.org/project/virtualenv/)

---

## 🛠️ Setup Instructions

### 1. 🔙 Backend (FastAPI)

#### a. Navigate to backend folder

```bash
cd backend
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
# Visit http://localhost:8000/docs for Swagger UI.

```
#### b. Navigate to task-manager folder

```bash
cd ../task-manager

npm install --legacy-peer-deps

ng serve

# Visit http://localhost:4200

```
#### c. API Endpoints

| Method | Endpoint             | Description    |
| ------ | -------------------- | -------------- |
| GET    | `/tasks`             | Get all tasks  |
| POST   | `/tasks/add`         | Add a new task |
| PUT    | `/tasks/update/{id}` | Update a task  |
| DELETE | `/tasks/remove/{id}` | Delete a task  |


#### d. Build Production

```bash
cd task-manager
ng build --configuration production

```
#### e. Deployment (Render)
 Backend and Frontend project deployed on online free platform Render

