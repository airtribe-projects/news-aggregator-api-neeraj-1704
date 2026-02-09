import tap from "tap";
import supertest from "supertest";
import app from "../src/app.js";
import connectDB from "../src/db/Connection.js";
import User from "../src/model/UserSchema.js";
tap.before(async () => {
  await connectDB();
  await User.deleteMany({}); // clean users
});

const server = supertest(app);

// Mock User Data
const mockUser = {
  name: "Clark Kent",
  email: "clark@superman.com",
  password: "Krypt()n8",
};

let token = "";

// ===============================
// ✅ USER CREATE TEST
// ===============================

tap.test("POST /api/v1/users → Create User", async (t) => {
  const response = await server.post("/api/v1/users").send(mockUser);

  t.equal(response.status, 200);

  // ✅ UserController returns { user: {...} }
  t.hasOwnProp(response.body, "user");

  t.end();
});

tap.test("POST /api/v1/users → Missing Email", async (t) => {
  const response = await server.post("/api/v1/users").send({
    name: mockUser.name,
    password: mockUser.password,
  });

  t.equal(response.status, 400);
  t.end();
});

// ===============================
// ✅ AUTH LOGIN TEST
// ===============================

tap.test("POST /api/v1/auth/login → Login User", async (t) => {
  const response = await server.post("/api/v1/auth/login").send({
    email: mockUser.email,
    password: mockUser.password,
  });

  t.equal(response.status, 200);

  // ✅ AuthController returns ApiResponse
  // token is inside response.body.data.accessToken
  t.hasOwnProp(response.body, "data");
  t.hasOwnProp(response.body.data, "accessToken");

  token = response.body.data.accessToken;

  t.end();
});

tap.test("POST /api/v1/auth/login → Wrong Password", async (t) => {
  const response = await server.post("/api/v1/auth/login").send({
    email: mockUser.email,
    password: "wrongpassword",
  });

  t.equal(response.status, 401);
  t.end();
});

// ===============================
// ✅ PREFERENCES TEST
// ===============================

tap.test("GET /api/v1/preferences → Get Preferences", async (t) => {
  const response = await server
    .get("/api/v1/preferences")
    .set("Authorization", `Bearer ${token}`);

  t.equal(response.status, 200);

  // ✅ PreferencesController returns ApiResponse
  t.hasOwnProp(response.body, "data");
  t.hasOwnProp(response.body.data, "preferences");

  t.end();
});

tap.test("GET /api/v1/preferences → Without Token", async (t) => {
  const response = await server.get("/api/v1/preferences");

  t.equal(response.status, 401);
  t.end();
});

tap.test("PUT /api/v1/preferences → Update Preferences", async (t) => {
  const response = await server
    .put("/api/v1/preferences")
    .set("Authorization", `Bearer ${token}`)
    .send({
      preferences: ["movies", "comics", "games"],
    });

  t.equal(response.status, 200);
  t.end();
});

// ===============================
// ✅ NEWS TEST
// ===============================

tap.test("GET /api/v1/news/personalized → Get News", async (t) => {
  const response = await server
    .get("/api/v1/news/personalized")
    .set("Authorization", `Bearer ${token}`);

  t.equal(response.status, 200);

  // ✅ NewsController returns ApiResponse
  t.hasOwnProp(response.body, "data");
  t.hasOwnProp(response.body.data, "news");

  t.end();
});

tap.test("GET /api/v1/news/personalized → Without Token", async (t) => {
  const response = await server.get("/api/v1/news/personalized");

  t.equal(response.status, 401);
  t.end();
});

// ===============================
// ✅ CLEANUP
// ===============================

tap.teardown(() => {
  process.exit(0);
});
