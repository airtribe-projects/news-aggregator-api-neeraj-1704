import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "./UserController.js"

import {verifyJWT} from "../../middleware/AuthMiddleware.js";

const userRoute = Router();

// CREATE + GET ALL
userRoute.route("/")
    .post(createUser)
    .get(verifyJWT, getAllUsers);

// GET / UPDATE / DELETE BY ID
userRoute.route("/:id")
    .get(verifyJWT, getUserById)
    .put(verifyJWT, updateUser)
    .delete(verifyJWT, deleteUser);

export default userRoute;