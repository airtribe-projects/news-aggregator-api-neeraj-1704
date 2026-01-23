import { Router } from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "./UserController.js"


const userRoute = Router();

// CREATE + GET ALL
userRoute.route("/")
    .post(createUser)
    .get(getAllUsers);

// GET / UPDATE / DELETE BY ID
userRoute.route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

export default userRoute;