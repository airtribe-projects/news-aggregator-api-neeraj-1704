Got it! I will **keep all your content intact** but **restructure and format it properly** so that the README looks clean, readable, and professional. Here’s the properly formatted version:

```markdown
# 📰 Personalized News Aggregator API

A RESTful API built using **Node.js**, **Express.js**, **MongoDB**, **JWT Authentication**, and **External News APIs**.

This project allows users to:

- Register & Login securely
- Store personal news preferences
- Fetch personalized news articles
- Use caching for optimized API calls
- Access protected routes with JWT authentication

---

## 🚀 Features

✅ User Authentication (JWT + bcrypt)  
✅ Secure Token-Based Authorization  
✅ User Preferences Management  
✅ Personalized News Feed  
✅ External API Integration (GNews / NewsCatcher)  
✅ In-Memory Caching (TTL based)  
✅ Modular Clean Folder Structure  
✅ Production-ready Middleware & Error Handling  

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Axios | External News API Calls |
| Tap + Supertest | Testing |

---

## 📂 Project Structure

```

src/
├── config/
│ ├── env.js
│ ├── constants.js
│
├── db/
│ └── connectDB.js
│
├── middleware/
│ ├── auth.middleware.js
│ └── error.middleware.js
│
├── modules/
│ ├── auth/
│ ├── user/
│ ├── news/
│ ├── preferences/
│ └── cache/
│
├── routes/
│ └── index.js
│
├── utils/
│ ├── ApiError.js
│ ├── ApiResponse.js
│ ├── asyncHandler.js
│ └── token.js
│
├── app.js
├── Constants.js
├── server.js

test/
README.md
.env.example

## ⚡ Prerequisites

- Node.js >= 18.0.0  
- MongoDB database (local)  
- News API key from [GNews](https://gnews.io/dashboard)

---

## 💻 Installation

Clone the repository:

```bash
git clone <repository-url>
cd news-aggregator-api-neeraj-1704
````

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/{databasename}
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=(your access token)
ACCESS_TOKEN_EXPIRY=1d
NEWS_API_KEY=(your-key-api)
NEWS_API_BASE_URL=https://gnews.io/api/v4
```

> Note: Follow this link to create the API key: [GNews API](https://docs.gnews.io/#introduction)

Update the environment variables with your own values.

---

## 🚀 Running the Application

**Development Mode:**

```bash
npm run dev
```

The server will start on [http://localhost:3000](http://localhost:3000).

**Production Mode:**

```bash
node src/server.js
```

---

## 🧪 Testing

```bash
npm test
```

The test suite covers:

* User signup and login
* Preference management
* Personalized news fetching
* Authentication middleware
* Error handling

---

## 👥 Sample User Data for `POST /api/v1/users`

```json
{
  "name": "Amit Sharma",
  "email": "amit@test.com",
  "password": "password123",
  "preferences": ["light_mode", "sms_notifications", "daily_summary"]
}

{
  "name": "Rahul Verma",
  "email": "rahul@test.com",
  "password": "rahul@2026",
  "preferences": ["dark_mode", "push_notifications"]
}

{
  "name": "Priya Singh",
  "email": "priya@test.com",
  "password": "priya@123",
  "preferences": ["email_notifications", "monthly_summary"]
}

{
  "name": "Sneha Patil",
  "email": "sneha@test.com",
  "password": "snehaSecure1",
  "preferences": ["dark_mode", "weekly_summary", "product_updates"]
}

{
  "name": "Karan Mehta",
  "email": "karan@test.com",
  "password": "karanPass99",
  "preferences": ["light_mode", "email_notifications"]
}

{
  "name": "Anjali Deshmukh",
  "email": "anjali@test.com",
  "password": "anjali@456",
  "preferences": ["dark_mode", "sms_notifications", "security_alerts"]
}

{
  "name": "Vikas Joshi",
  "email": "vikas@test.com",
  "password": "vikas@789",
  "preferences": ["weekly_summary", "push_notifications"]
}

{
  "name": "Rohit Kumar",
  "email": "rohit@test.com",
  "password": "rohitPass321",
  "preferences": ["dark_mode", "email_notifications", "new_features"]
}
```

---

## ✅ API Endpoints

### **User APIs**

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| POST   | /api/v1/users     | Create new user |
| GET    | /api/v1/users     | Get all users   |
| PUT    | /api/v1/users/:id | Update user     |
| DELETE | /api/v1/users/:id | Delete user     |

---

### **Auth APIs**

| Method | Endpoint            | Description |
| ------ | ------------------- | ----------- |
| POST   | /api/v1/auth/login  | User login  |
| POST   | /api/v1/auth/logout | User logout |

---

### **Preferences APIs**

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | /api/v1/preferences | Get user preferences    |
| PUT    | /api/v1/preferences | Update user preferences |

---

### **Personalized News API**

| Method | Endpoint                  | Description                                       |
| ------ | ------------------------- | ------------------------------------------------- |
| GET    | /api/v1/news/personalized | Fetch personalized news based on user preferences |

---

## 🔐 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Input validation
* Error handling to prevent sensitive info leakage
* Secure HTTP headers

---

## 💾 Caching

* News articles are cached in memory for **5 minutes (TTL)**
* Caching is **user-preferences based** to reduce external API calls

```

