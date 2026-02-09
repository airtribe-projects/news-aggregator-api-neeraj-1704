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
|----------|------|
| Node.js | Backend Runtime |
| Express.js | REST API Framework |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Axios | External News API Calls |
| Tap + Supertest | Testing |

---

## 📂 Project Structure

src/
│── config/
│   ├── env.js
│   ├── constants.js
│
│── db/
│   ├── connectDB.js
│
│── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│
│── modules/
│   ├── auth/
│   ├── user/
│   ├── news/
│   ├── preferences/
│   ├── cache/
│
│── routes/
│   └── index.js
│
│── utils/
│── app.js
│── server.js
│
test/
README.md
.env.example

Prerequisites
Node.js >= 18.0.0
MongoDB database (local)
News API key from [NewsAPI](https://gnews.io/dashboard)



Installation

Clone the repository:

git clone <repository-url>
cd news-aggregator-api-neeraj-1704

Install dependencies:
npm install

Create a .env file in the root directory:

PORT=3000
PORT = 3000
MONGODB_URI = mongodb://localhost:27017/{databasename}
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=(your access token)
ACCESS_TOKEN_EXPIRY=1d
NEWS_API_KEY=(your-key-api)
NEWS_API_BASE_URL=https://gnews.io/api/v4 (your api url)

Note - please flow this step from the give link https://docs.gnews.io/#introduction create the api key

Update the environment variables with your own values.
Running the Application

Development Mode
npm run dev

The server will start on http://localhost:3000 (or the port specified in your .env file).

Production Mode
node src/server.js



🧪 Testing
npm test

The test suite covers:
User signup and login
Preference management
Personalized news fetching
Authentication middleware
Error handling


User Data for POST /api/v1/users

post data for the user creation in the backend 

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



✅ API Endpoints
User APIs
Method	Endpoint	Description
# POST	/api/v1/users	Create new user
# GET	/api/v1/users	Get all users
# PUT	/api/v1/users/:id	Update user
# DELETE	/api/v1/users/:id	Delete user
Auth APIs
Method	Endpoint	Description
# POST	/api/v1/auth/login	User login
# POST	/api/v1/auth/logout	User logout
Preferences APIs
Method	Endpoint	Description
# GET	/api/v1/preferences	Get user preferences
# PUT	/api/v1/preferences	Update user preferences
Personalized News API
Method	Endpoint	Description
# GET	/api/v1/news/personalized	Fetch personalized news based on user preferences


✅ API Endpoints
User APIs
1. Create User

POST /api/v1/users
Register a new user.

Request Body:

{
  "name": "Amit Sharma",
  "email": "amit@test.com",
  "password": "password123",
  "preferences": ["light_mode", "sms_notifications", "daily_summary"]
}


Response: 200 OK

{
  "user": {
    "id": "64e123abc1234567890abcdef",
    "name": "Amit Sharma",
    "email": "amit@test.com"
  }
}


Error Responses:

400 Bad Request – Missing fields

{
  "status": "error",
  "message": "All fields are required"
}


409 Conflict – User already exists

{
  "status": "error",
  "message": "User already exists"
}

2. Get All Users

GET /api/v1/users
Fetch all users.

Response: 200 OK

{
  "status": 200,
  "data": [
    {
      "id": "64e123abc1234567890abcdef",
      "name": "Amit Sharma",
      "email": "amit@test.com"
    },
    {
      "id": "64e124def1234567890abcdef",
      "name": "Rahul Verma",
      "email": "rahul@test.com"
    }
  ],
  "message": "Users fetched successfully"
}

3. Update User

PUT /api/v1/users/:id
Update a user by ID.

Request Body Example:

{
  "name": "Amit K. Sharma",
  "preferences": ["dark_mode", "daily_summary"]
}


Response: 200 OK

{
  "status": 200,
  "data": {
    "id": "64e123abc1234567890abcdef",
    "name": "Amit K. Sharma",
    "email": "amit@test.com",
    "preferences": ["dark_mode", "daily_summary"]
  },
  "message": "User updated successfully"
}

4. Delete User

DELETE /api/v1/users/:id

Response: 200 OK

{
  "status": 200,
  "data": null,
  "message": "User deleted successfully"
}

Auth APIs
1. Login User

POST /api/v1/auth/login

Request Body:

{
  "email": "amit@test.com",
  "password": "password123"
}


Response: 200 OK

{
  "status": 200,
  "data": {
    "user": {
      "id": "64e123abc1234567890abcdef",
      "name": "Amit Sharma",
      "email": "amit@test.com"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "message": "User logged in successfully"
}


Error Responses:

400 Bad Request – Missing email/password

{
  "status": "error",
  "message": "Email and password are required"
}


401 Unauthorized – Invalid credentials

{
  "status": "error",
  "message": "Invalid email or password"
}

2. Logout User

POST /api/v1/auth/logout

Response: 200 OK

{
  "status": 200,
  "data": {},
  "message": "User logged out successfully"
}

Preferences APIs
1. Get User Preferences

GET /api/v1/preferences
Headers:

Authorization: Bearer <accessToken>


Response: 200 OK

{
  "status": 200,
  "data": {
    "preferences": ["light_mode", "sms_notifications", "daily_summary"]
  },
  "message": "Preferences fetched successfully"
}


Error Response:

401 Unauthorized – Missing or invalid token

{
  "status": "error",
  "message": "Unauthorized"
}

2. Update User Preferences

PUT /api/v1/preferences
Headers:

Authorization: Bearer <accessToken>


Request Body Example:

{
  "preferences": ["dark_mode", "push_notifications", "weekly_summary"]
}


Response: 200 OK

{
  "status": 200,
  "data": {},
  "message": "Preferences updated successfully"
}

Personalized News API
1. Get Personalized News

GET /api/v1/news/personalized
Headers:

Authorization: Bearer <accessToken>


Response: 200 OK

{
  "status": 200,
  "data": {
    "news": [
      {
        "title": "Breaking Tech News",
        "description": "Latest updates in technology.",
        "url": "https://example.com/article1",
        "source": "TechCrunch",
        "publishedAt": "2026-02-09T10:00:00Z"
      },
      {
        "title": "Sports Highlights",
        "description": "Daily sports news highlights.",
        "url": "https://example.com/article2",
        "source": "ESPN",
        "publishedAt": "2026-02-09T09:30:00Z"
      }
    ]
  },
  "message": "Personalized news fetched successfully"
}


Error Response:

401 Unauthorized – Missing or invalid token

{
  "status": "error",
  "message": "Unauthorized"
}


🔐 Security Features
Password hashing using bcrypt
JWT-based authentication
Input validation
Error handling to prevent sensitive info leakage
Secure HTTP headers


💾 Caching
News articles are cached in memory for 5 minutes (TTL)
Caching is based on user preferences to reduce external API calls


