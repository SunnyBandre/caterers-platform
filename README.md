# Catering Search Platform

A full-stack catering search platform built using Next.js, Node.js, Express, and MongoDB.

Users can browse caterers, search by caterer name, and filter caterers based on price per plate through a modern responsive interface.

---

# Live Demo

## Frontend
https://caterers-platform.vercel.app

## Backend API
https://caterers-platform.onrender.com

---

# Features

- View all caterers
- Search caterers by name
- Filter caterers by maximum price per plate
- Responsive modern UI
- Interactive caterer detail popup/modal
- REST API integration
- MongoDB database connectivity
- Full-stack architecture
- Clean folder structure

---

# Tech Stack

## Frontend
- Next.js
- React.js
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

# Project Structure

```bash
caterers-platform/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/SunnyBandre/caterers-platform.git
```

```bash
cd caterers-platform
```

---

# Backend Setup

## Step 1: Navigate to Backend Folder

```bash
cd backend
```

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Create `.env` File

Create a `.env` file inside the backend folder.

Add the following:

```env
MONGO_URI=your_mongodb_connection_string
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/caterersDB?retryWrites=true&w=majority
```

---

## Step 4: Run Backend Server

```bash
npm run dev
```

Backend will run on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Step 1: Open New Terminal

## Step 2: Navigate to Frontend Folder

```bash
cd frontend
```

---

## Step 3: Install Dependencies

```bash
npm install
```

---

## Step 4: Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Get All Caterers

```http
GET /api/caterers
```

---

## Get Caterer By ID

```http
GET /api/caterers/:id
```

---

## Create Caterer

```http
POST /api/caterers
```

---

# Sample Caterer JSON

```json
{
  "name": "Royal Caterers",
  "location": "Mumbai",
  "pricePerPlate": 500,
  "cuisines": ["Indian", "Chinese"],
  "rating": 4.5
}
```

---

# Deployment

## Frontend Deployment
- Vercel

## Backend Deployment
- Render

## Database
- MongoDB Atlas

---

# Screenshots

## Home Page

<img width="1913" height="911" alt="image" src="https://github.com/user-attachments/assets/432d6014-f1ac-47ea-8b23-1ff898d1ee8e" />


---

## Caterers Page

<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/d8b6f207-36b1-4b67-9607-49c2b63520f3" />


# Author

Sunny Bandre
